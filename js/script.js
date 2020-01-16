function toggleActive(tabName) {
  $('.active').removeClass('nav-options_active');
  $('#'+tabName).toggleClass('nav-options_active')
  closeNavOnSelect();
}

function toggleNav() {
  var x =document.getElementById('myNav')
  var window_size = window.matchMedia("(max-width: 850px)")
  if (window_size.matches) {
    if (x.className === 'nav-options') {
      x.className += ' display';
    } else {
      x.className = "nav-options";
    }
  }
}

/* Trigger home icon display when no longer on home screen */
$(window).on('scroll', function() {
  var mobile = window.matchMedia("(max-width: 850px)")
  if (mobile.matches) {
    var element_position = ($('#main-body').offset().top) / 1.5;
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;
    var x =document.getElementById('nav-home_button')

    if(y_scroll_pos > scroll_pos_test) {
      x.className += ' display';
    } else {
      x.className = "nav-home";
    }
  }
});
