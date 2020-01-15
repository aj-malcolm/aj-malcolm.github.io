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

    if(y_scroll_pos > scroll_pos_test) {
      $('.nav-home').css('display', 'block')
    } else {
      $('.nav-home').css('display', 'none')
    }
  }
});

function resetFixedNav(window_size) {
  if (window_size.matches) {
    $('#myNav').css('display', 'inline-block')
  }
}
var window_size = window.matchMedia("(min-width: 851px)")
resetFixedNav(window_size)
window_size.addListener(resetFixedNav)
