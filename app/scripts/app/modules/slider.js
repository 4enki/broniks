$(document).ready(function(){

  var owl  = $('.owl-carousel');
  var owladditional = $('.additionals-lists');

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

  owladditional.owlCarousel({
    items: 1,
    slideSpeed: 1200,
    lazyLoad: true,
    navigation: false,
    pagination: false
  });
  $(".additional_nav-right").click(function(){
    owladditional.trigger('next.owl.carousel');
  });
  $(".additional_nav-left").click(function(){
    owladditional.trigger('prev.owl.carousel');
  });


});

