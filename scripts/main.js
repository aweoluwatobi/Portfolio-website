$('.nav li a').on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});

$('nav li a').removeClass("active");
    $(this).addClass("active");


