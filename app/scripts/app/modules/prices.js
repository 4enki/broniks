$(document).ready(function() {

  $('#prices-types').easytabs({
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  });

  $('#burial, #cremation').easytabs({
    tabActiveClass: 'is-active',
    tabs: '> .prices-tabs > ul > li'
  });

  $('#costs-list').easytabs({
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  });

});
