/* Toggle between adding and removing the "responsive" class to the menu when the user clicks on the icon */
function menuFunction() {
  var menu = document.getElementById("menu"); //Set the variable 'menu' to the #menu element
  var header = document.getElementById("header"); //Set the variable 'header' to the #menu element
  if (menu.className === "menu" && header.className === "header" )  { //if the 'menu' class is 'menu' and 'header' class is 'header' (we want to change them simultaneously)
    menu.className += " responsive"; //Change the class to 'responsive'
    header.className += " responsive";
  } else {
    menu.className = "menu"; //Change the class to 'menu'
    header.className = "header";  //Change the class to 'header'
  }
}//Close menuFunction


//Search function
function searchFunction() {
  var input, filter, ul, li, a, i; //create variable
  input = document.getElementById("searchInput"); //input variable = #searchInput
  filter = input.value.toUpperCase(); //filter variable = turn #input value into uppercase
  contentSection = document.getElementById("content"); // variable contentSection = #content
  article = contentSection.getElementsByTagName("article"); // variable article = #content article
  for (i = 0; i < article.length; i++) { //For loop the article variable (go through the index of the elements in the array)
    h2 = article[i].getElementsByTagName("h2")[0]; //h2 = the relevant 'i' with the h2 tag
    if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) { //if the h2 tag (in uppercase) has an index (has the search term). -1 means that it doesn't
      article[i].classList.add('show'); //Display the relevant article
      article[i].classList.remove('hide'); //Hide the relevant article
      article[i].classList.remove('moveUp'); //Hide the relevant article
    } else {
      article[i].classList.add('hide'); //Display the relevant article
      article[i].classList.remove('show'); //Hide the relevant article
      article[i].classList.remove('moveUp'); //Hide the relevant article
    }
  }//Close for loop

  //No more results text
  var shown = document.getElementById("content").querySelectorAll(".show"); //Set the variable 'shown' to the .show articles within 'content'
  var noResults = document.getElementById("no-results"); //Set the variable noResults to #no-results

  if (shown.length == 0 ) { //If there are 0 shown articles
    noResults.style.display = "block"; //Show the no results text
  } else {
    noResults.style.display = "none"; //Hide the no results text
  }
}//Close searchFunction
