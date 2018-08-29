$('._nav-hamburger').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
  $('.header-nav_actions').toggleClass('is-hide');
  $('.menu').toggleClass('is-active');
  return false;
});
