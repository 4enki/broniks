$(document).ready(function(){
  $('input[type="text"]').click(function() {
    var sd = $(this).attr('placeholder');
    $('label[for^="'+sd+'"]').fadeIn();
  });
});
