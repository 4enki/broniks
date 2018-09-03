$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    slideSpeed: 1200,
    lazyLoad: true,
    navigation: false,
    pagination: false
  });
  $(".memory_nav-right").click(function(){
    owl.trigger('next.owl.carousel');
  });
  $(".memory_nav-left").click(function(){
    owl.trigger('prev.owl.carousel');
  });

});

