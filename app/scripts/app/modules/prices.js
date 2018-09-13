$(document).ready(function() {
  var savedHash = location.hash || '#';
  var hashParts = savedHash.split('_');
  $('#prices-types').easytabs({
	defaultTab: savedHash.length > 1 ? hashParts[0] + '-selector' : null,
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  });

  $('#burial1, #cremation1').easytabs({
    tabActiveClass: 'is-active',
    tabs: '> .prices-tabs > ul > li'
  });

  $('#costs-list').easytabs({
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  });

});
