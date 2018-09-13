$(document).ready(function() {
  var savedHash = location.hash || '#';
  var hashParts = savedHash.split('_');
  var savedPanel;

  var config = {
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  };
  if (savedHash.length > 1)
    config.defaultTab = hashParts[0] + '-selector';
  $('#prices-types').easytabs(config).bind('easytabs:before', function(a, b, c) {
    if (c.attr('id').indexOf('_') > -1)
      return;
    savedPanel = location.hash;
  }).bind('easytabs:after', function(a, b, c) {
    if (c.attr('id').indexOf('_') > -1)
      return;
    var nextId = '#' + c.attr('id');
    var next = nextId + '_' + savedPanel.split('_')[1];
    $(nextId + '1').easytabs('select', next);
    // console.log(savedPanel, '->' , next, a,b,c, this);
    // history.pushState({}, next);
  });

  $('#burial1, #cremation1').easytabs({tabActiveClass: 'is-active', tabs: '> .prices-tabs > ul > li'});

  $('#costs-list').easytabs({updateHash: false, tabActiveClass: 'is-active', tabs: '.headline_tabs .switch-list > li'});

  $('html, body').stop().animate({
    scrollTop: $('#prices-types').offset().top - 143
  }, 300, 'swing');
});
