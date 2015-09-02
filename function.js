//creating the data array that is going to contain all the organized data
var data = [];
//creating an array from only the unique sections in the resources object
var sections = [];
//retrieving the section of the page that is going to contain the content and storing in a variable
var el = document.getElementById('content');
//variable that will contain the frame of the information display
var frame = '';
//parses the resources file and extracts all unique section names to an array
function sectionate() {
  if (sections.indexOf(resources[i].section) == -1) {
    sections.push(resources[i].section);
  }
}
//calls the sectionate function for each item of the resources array
for (var i=0; i<resources.length; i++) {
  sectionate();
}
//upper case each section name
function upperCase() {
  for (var n=0; n<sections.length; n++) {
    sections[n] = sections[n].toUpperCase();
  }
}
//calling upperCase fcn
upperCase();
//each item in the sections is formatted and added to the frame variable for later writing to the page
function arrayize() {
  sections.sort();
  for (var j=0; j<sections.length; j++) {
    frame += "<div class='panel panel-default' id='" + sections[j] + "'><div class='panel-heading'>" + sections[j] + "</div></div>";
  }
}
arrayize();
//writing the frame var to the appropiate place in the page
el.innerHTML = frame;
//iterating over resources array and sections array and writing the information in the correct place on the page
function categorize() {
  for (var l=0; l<sections.length; l++) {
    ell = document.getElementById(sections[l]);
    for (var k=0; k<resources.length; k++) { 
      if (sections[l] === resources[k].section.toUpperCase()) {
      newEl = document.createElement('div');
      newA = document.createElement('a');
      if (resources[k].icon) {
        newImg = document.createElement('img');
        newImg.setAttribute('src', resources[k].icon);
        newImg.setAttribute('class', 'icon');
        newA.appendChild(newImg);
      }
      newA.setAttribute('href', resources[k].url);
      newEl.className = 'panel-body';
      newText = document.createTextNode(resources[k].title);
      newA.appendChild(newText);
      newEl.appendChild(newA);
      ell.appendChild(newEl);
      }
    }
  }
}
//calling the categorize function
categorize();
//generating the nav bar from sections array
function navCreate() {
  ell = document.getElementById("navBar");
  newNav = document.createElement('ul');
  newNav.setAttribute('class', 'nav nav-pills nav-stacked')
  newNav.setAttribute('data-spy', 'affix')
  newNav.setAttribute('data-offset-top', '245')
  for (var h=0; h<sections.length; h++) {
    newText = document.createTextNode(sections[h] + ' ');
    newLi = document.createElement('li');
    newLink = document.createElement('a');
    newDiv = document.createElement('div');
    newLink.setAttribute('href', "#" + sections[h]);
    newLink.appendChild(newText)
    newBadge = document.createElement('span');
    newBadge.setAttribute('class', 'badge');
    badgeCount = 0;
    for (var i=0; i<resources.length; i++) {
      if (resources[i].section.toUpperCase() === sections[h]) {
        badgeCount++;
      }
    }
    newBadgeB = document.createTextNode(badgeCount);
    newBadge.appendChild(newBadgeB);
    newDiv.appendChild(newLink);
    newDiv.appendChild(newBadge);
    newLi.appendChild(newDiv);
    newNav.appendChild(newLi);
    newDiv.setAttribute('class', 'navBar');
  }
  ell.appendChild(newNav);
}
//calling the nav bar creation function
navCreate();