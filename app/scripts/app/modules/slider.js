$(document).ready(function(){

  var owl     = $('.owl-carousel');
  var owl2 = $('.additional_lists');

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


  owl2.owlCarousel();
  $(".additional_nav-right").click(function(){
    owl2.trigger('next.owl2.carousel');
  });
  $(".additional_nav-left").click(function(){
    owl2.trigger('prev.owl2.carousel');
  });

});

