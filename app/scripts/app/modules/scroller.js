$(document).ready(function () {
  var scrollerStart = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });

  $('#scroller').click(function () {
    scrollerStart = true;
    $('body,html').animate({scrollTop: 0}, 400, function () {
      scrollerStart = false;
    });
    return false;
  });
});
