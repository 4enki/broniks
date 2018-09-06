$(document).ready(function() {

  $('#prices-types').easytabs({
    tabActiveClass: 'is-active',
    tabs: '> .prices-tabs > ul > li'
  });

  $('#burial, #cremation').easytabs({
    tabActiveClass: 'is-active',
    tabs: '> .prices-tabs > ul > li'
  });

});
