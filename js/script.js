function toggleActive(tabName) {
  $('.active').removeClass('nav-options_active');
  $('#'+tabName).toggleClass('nav-options_active')
  closeNavOnSelect();
}

function openNav() {
  var x = window.matchMedia("(max-width: 768px)")
  if (x.matches) { // If media query matches
    document.getElementById("myNav").style.display = "inline-block";
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0rem";
  } else {
    var width = "20rem"
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.width = width;
    document.getElementById("main").style.marginLeft = width;
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  var x = window.matchMedia("(max-width: 768px)")
  if (x.matches) { // If media query matches
    document.getElementById("myNav").style.display = "none";
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0rem";
  } else {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.width = "0rem";
    document.getElementById("main").style.marginLeft = "0rem";
  }
} 

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavOnSelect() {
  var x = window.matchMedia("(max-width: 768px)")
  if (x.matches) { // If media query matches
    document.getElementById("myNav").style.display = "none";
  }
} 

/* Trigger home icon display when no longer on home screen */
$(window).on('scroll', function() {
    var element_position = ($('#main-body').offset().top) / 1.5;
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
      $('.nav-home').css('display', 'block')
    } else {
      $('.nav-home').css('display', 'none')
    }
});