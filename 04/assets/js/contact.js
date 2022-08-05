$(function() {
    $('form#contact_form').submit(function(e) {
        e.preventDefault(); 
        $('form#contact_form .error').remove();
        var hasError = false;
        var $email = $('form input[name="email'); 
        var $name = $('form input[name="name'); 
        var $message = $('form textarea[name="message'); 
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if ($email.val() == '' || !re.test($email.val())){
            $('#email').parent().append('<span class="error">Please provide valid Email.</span>');
            $('#email').addClass('inputError');
            hasError = true;
        }

        if($name.val() == '') {
            $('#name').parent().append('<span class="error">Please provide Your name.</span>');
            $('#name').addClass('inputError');
            hasError = true;
        }

        if($message.val() == '') {
            $('#message').parent().append('<span class="error">Please enter details About Project.</span>');
            $('#message').addClass('inputError');
            hasError = true;
        }

        if(!hasError) {
            var url = "./assets/php/contact.php"; 
            $.ajax({
               type: "POST",
               url: url,
               data: $("#contact_form").serialize()
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $('form#contact_form').removeClass('error');
                $('form#contact_form').addClass('success');

                // Set the message text.
                $('#contact_modal').slideUp(300);
                $('.modal-backdrop').hide();
                var successMessage = $('form#contact_form').prepend('<span class="success">Thank you. Your email was sent successfully.</span>');
                setTimeout(successMessage, 2000);

                // Clear the form.
                $('form input[name="email"], form input[name="name"], form textarea[name="message"]').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $('form#contact_form').removeClass('success');
                $('form#contact_form').addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $('form#contact_form').text(data.responseText);
                } else {
                    $('form#contact_form').prepend('<span class="error">Oops! An error occured and your message could not be sent.</span>');
                }
            });
        }
        return false;
    });
});
