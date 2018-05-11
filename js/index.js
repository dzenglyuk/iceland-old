// Map Showing Code
$(function() {
    $('.map-button').click(function() {
        $('.map-container').toggle(200);
    })
// Map Showing Code Ends
// Form Showing
    $('.email-button').click(function() {
        $('.form-container').toggle(200);
    })    
// Form Showing Ends
//Smooth Scrolling
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
//Smooth Scrolling Ends
});
