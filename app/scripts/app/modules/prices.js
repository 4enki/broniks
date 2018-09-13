$(document).ready(function() {
  var savedHash = location.hash || '#';
  var hashParts = savedHash.split('_');
  var savedPanel;
  $('#prices-types').easytabs({
	defaultTab: savedHash.length > 1 ? hashParts[0] + '-selector' : null,
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
}).bind('easytabs:before', function(a,b,c) {
	savedPanel = location.hash;
	// console.log(this, a,b,c);
}).bind('easytabs:after', function(a,b,c) {
	var nextId = '#' + c.attr('id');
	var next = nextId + '_' + savedPanel.split('_')[1];
	$(nextId + '1').easytabs('select', next);
	// history.pushState({}, next);
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
