function toggleActive(tabName) {
  $('.active').removeClass('nav-options_active');
  $('#'+tabName).toggleClass('nav-options_active')
  document.getElementById("myNav").style.display = "none";
}

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
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