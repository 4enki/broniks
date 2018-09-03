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
    console.log('form _call_agent');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');

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

          console.log('success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-error ui-shake');
          formOkMessage.addClass('show');
        },
        error: function() {

          console.log('error');

          formInput.closest('.form-group').addClass('is-error ui-shake');

        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }

    return false;
  });

  $('._check_agent').submit(function(e) {
    console.log('form _check_agent');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');
    let check_number   = form.find('input[name="check_number"]').val();

    if(formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        // url: "forms.php",
        data: {
          'check_number': check_number
        },
        success: function() {

          console.log('success');

          formInput.closest('.form-group').removeClass('is-error ui-shake');
          $.magnificPopup.open({
            items: {
              src: '#check_agent'
            },
            type: 'inline'
          });
        },
        error: function() {

          console.log('error');

          formInput.closest('.form-group').addClass('is-error ui-shake');

        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }

    return false;
  });

});
