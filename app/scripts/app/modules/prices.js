$(document).ready(function() {

  $.ionTabs("#prices", {
    type: "none",
  });

  $.ionTabs("#burial", "#cremation", {
    type: "hash",
  });

  let cremationtype = $('input[name="cremationtype"]');
  let burialtype = $('input[name="burialtype"]');

  cremationtype.click(function () {
    if ( $(this).prop('checked') ) {
      $.ionTabs.setTab("types", "cremationtype");
      burialtype.prop('checked',false);
    }
  });

  burialtype.click(function () {
    if ( $(this).prop('checked') ) {
      $.ionTabs.setTab("types", "burialtype");
      cremationtype.prop('checked',false);
    }
  });

});

