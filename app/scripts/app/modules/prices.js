$(document).ready(function() {

  $.ionTabs("#prices", "#burial", "#cremation", {
    type: "hash",
  });

  $('input[name="cremationtype"]').click(function () {
    if ( $(this).prop('checked') ) {
      $.ionTabs.setTab("types", "cremationtype");
    }
  });

  $('input[name="burialtype"]').click(function () {
    if ( $(this).prop('checked') ) {
      $.ionTabs.setTab("types", "burialtype");
    }
  });

});
