function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openTab(tabName) {
  $('.active').removeClass('active');
  $('#'+tabName).toggleClass('active')
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("home").click();