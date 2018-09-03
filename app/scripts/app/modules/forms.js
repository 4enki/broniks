if ($) $(function () {

  let form              = $('._call_agent');
  let allformInput      = form.find('.form-control');
  let formInputRequired = form.find('.form-control[required]');
  let formSendBtn       = $('._call_agent_btn');

  formInputRequired.keyup(function() {
    if( $(this).val().length !== 0 ) {
      formSendBtn.attr('disabled', false);
    } else {
      formSendBtn.attr('disabled', true);
    }
  });

  function clear_form() {
    allformInput.val('');
  }

  $('._call_agent').submit(function(e) {
    console.log('form');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');
    let formInputEmail = form.find('.form-control[name="feedback"]');

    let name     = form.find('input[name="name"]').val();
    let tel      = form.find('input[name="tel"]').val();

    if(formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: {
          'name': name,
          'tel': tel
        },
        success: function() {
          clear_form();
          formInput.closest('.form-group').removeClass('is-error');
          formOkMessage.addClass('show');
        },
        error: function() {
        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error');
    }

    return false;
  });

  $('._check_agent').submit(function(e) {
    console.log('form');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');
    let formInputEmail = form.find('.form-control[name="feedback"]');

    let name     = form.find('input[name="name"]').val();
    let tel      = form.find('input[name="tel"]').val();

    if(formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: {
          'name': name,
          'tel': tel
        },
        success: function() {
          clear_form();
          formInput.closest('.form-group').removeClass('is-error');
          formOkMessage.addClass('show');
        },
        error: function() {
          formInput.closest('.form-group').addClass('is-error');
        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error');
    }

    return false;
  });

});
