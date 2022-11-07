//REQUEST JS

var articlesRequest = new XMLHttpRequest(); //Create articlesRequestRequest object
var articlesUrl = "https://saurav.tech/NewsAPI/everything/cnn.json"; //Get JSON articles

articlesRequest.onreadystatechange = function() { //Function that executes on status change for the "xhttp" object
  if (this.readyState == 4 && this.status == 200) { //If readyState is 4 (DONE) & status property is 200 (OK) https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    var articlesArray = JSON.parse(this.responseText); // make articlesArray equal to responseText (text received from server response)
    articlesFunction(articlesArray.articles); //Calling function with articlesArray.articles as the argument
  }
};

articlesRequest.open("GET", articlesUrl, true); //Initialize the request at the same time as the response is the received from ".send" (asynchronously)
articlesRequest.send(); //Send xhttp request

function articlesFunction(arr) { //Create articlesFunction

  //Sort the articles based on the 'publishedAt' field
  function compare(a,b) {
    if (a.publishedAt < b.publishedAt)
      return -1;
    if (a.publishedAt > b.publishedAt)
      return 1;
    return 0;
  }

  arr.sort(compare); //Run sort method on compare function

  // var myObj = JSON.parse('{"date_created":"20171025T08:12:07Z"}'),
  //     myDate = new Date(1000*myObj.date_created);
  //
  // console.log(myDate.toString());
  // console.log(myDate.toLocaleString());
  // console.log(myDate.toUTCString());
    var noResults = '<div id="no-results"><h1>No Search Results</h1><p>Try another search</p></div>'; //Define the noResults variable so that we have something to show when there are no search results defined
    var res = []; //Create array and set to variable res
    var out = ""; //Create out variable and set to string
    var i; //Create i variable
    for(i = 0; i < arr.length; i++) { //For loop the array object (go through the index of the elements in the array)

      //Reformat the date value
      var publishedDate = arr[i].publishedAt; //Get the date value for the relevant object
      var hyphenDate = publishedDate.replace(/(\d{4})(\d{2})(\d+)/, '$1-$2-$3'); //Add hyphens to string so that it looks more like the JavaScript Date format
      var shortenedDate = hyphenDate.substring(0, 10); //Shorten string to 10 chracters so that it looks more like the JavaScript Date format
      var dateString = new Date(shortenedDate).toUTCString(); //Create the variable dateString and set it to the date
      var dateString = dateString.split(' ').slice(0, 4).join(' '); //Remove the time from the date

      /*Fix the missing value in the author key*/
      if (arr[i].author == null) { //If the author value is equal to null
        var author = "Bamse"; //Bamse wrote this article :) :) (set variable author to Bamse)
      } else {
        var author = arr[i].author; //Set variable author to the author value
      }


      out += '<article id="article" class="moveUp article-'+ i +'">' +
        '<a href="'+ arr[i].url +'" title="' + arr[i].title + '" class="img-link"><img src="' + arr[i].urlToImage + '" alt="' + arr[i].title + '" width="100%" height="auto"></a>' +
        '<div class="info">' +
          '<p class="date-author">Published ' + dateString + ' by ' + author + '</p>' +
          '<h2><a href="'+ arr[i].url +'" title="' + arr[i].title + '">' + arr[i].title + '</a></h2>' +
          '<p class="description"><a href="'+ arr[i].url +'" title="' + arr[i].title + '">' + arr[i].description + '</a></p>' +
          '<p><a href="'+ arr[i].url +'" title="' + arr[i].title + '" class="btn"> Read More</a></p>' +
        '</div>' +
      '</article>';
  }

 //Fill the #content tag with the content within the variables 'noResults' & 'out' & weatherWidget
  document.getElementById("content").innerHTML = noResults + out;
}
