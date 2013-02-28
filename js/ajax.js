$(function() {
    // These first three lines of code compensate for Javascript being turned on and off. 
    // It simply changes the submit input field from a type of "submit" to a type of "button".

    var paraTag = $('input#submit').parent('a');
    $(paraTag).children('input').remove();
    $(paraTag).append('<input type="button" name="submit" id="submit" value="Submit!" />');

    $('#contact_container input#submit').click(function() {
        $('#preloader').append('<img src="images/loading.gif" class="loaderIcon" alt="Loading..." />');

        var name = $('input#name').val();
        var email = $('input#email').val();
		var subject = $('input#subject').val();
        var message = $('textarea#message').val();

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message,

            success: function(results) {
                $('#preloader img.loaderIcon').fadeOut(1000);
                $('ul#response').html(results);
            }
        }); // end ajax
    });
});
		