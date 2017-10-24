$(document).on('click', '.nav li a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});

$('nav li a').on('click', function(event){
    $(".nav li a").removeClass("active");
    $(this).addClass("active");
})


