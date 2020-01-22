function changeText(){
  if(document.getElementById('nav_btn').checked) {
    $('#nav_label').text('CLOSE')
  } else {
    $('#nav_label').text('MENU')
  }
}

function toggleNav() {
  $('#nav_btn').click()
}

// /* Trigger home icon display when no longer on home screen */
// $(window).on('scroll', function() {
//   var mobile = window.matchMedia("(max-width: 850px)")
//   if (mobile.matches) {
//     var element_position = ($('#main-body').offset().top) / 1.5;
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = element_position;
//     var x =document.getElementById('nav-home_button')

//     if(y_scroll_pos > scroll_pos_test) {
//       x.className += ' display';
//     } else {
//       x.className = "nav-home";
//     }
//   }
// });
