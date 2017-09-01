
$(document).ready(function() {
    // all custom jQuery will go here
    console.log(1);
    $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-us").offset().top},
        'slow');
});
});
