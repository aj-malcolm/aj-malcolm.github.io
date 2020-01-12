function toggleNavMenu(bool) {
  var x = document.getElementById("myTopnav");
  if (bool) {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } else {
    x.className = "topnav"
  }
}

function openTab(tabName) {
  $('.active').removeClass('active');
  $('#'+tabName).toggleClass('active')
  toggleNavMenu(false)
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("home").click();