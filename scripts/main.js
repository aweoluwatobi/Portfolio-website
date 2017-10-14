$(document).on('click', '.nav li a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);


});


