(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(document).on('submit', '#contact_form_submit', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            if (!name) {
                $('#name').removeClass('error');
                $('#name').addClass('error').attr('placeholder', 'Please Enter Name');
            } else {
                $('#name').removeClass('error');
            }
            if (!email) {
                $('#email').removeClass('error');
                $('#email').addClass('error').attr('placeholder', 'Please Enter Email')
            } else {
                $('#email').removeClass('error');
            }
            if (!subject) {
                $('#subject').removeClass('error');
                $('#subject').addClass('error').attr('placeholder', 'Please Enter Subject')
            } else {
                $('#email').removeClass('error');
            }
            if (!message) {
                $('#message').removeClass('error');
                $('#message').addClass('error').attr('placeholder', 'Please Enter Your Message')
            } else {
                $('#message').removeClass('error');
            }


            if (name && email && subject && message) {
                $.ajax({
                    type: "POST",
                    url: 'contact.php',
                    data: {
                        'name': name,
                        'email': email,
                        'subject': subject,
                        'message': message,
                    },
                    success: function (data) {
                        $('#contact_form_submit').children('.email-success').remove();
                        $('#contact_form_submit').prepend('<span class="alert alert-success email-success">' + data + '</span>');
                        $('#name').val('');
                        $('#email').val('');
                        $('#subject').val('');
                        $('#message').val('');
                        // $('#map').height('576px');
                        $('.email-success').fadeOut(1000);
                    },
                    error: function (res) {

                    }
                });
            } else {
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">Somenthing went wrong</span>');
                // $('#map').height('576px');
                $('.email-success').fadeOut(1000);
            }



        });
    })

}(jQuery));