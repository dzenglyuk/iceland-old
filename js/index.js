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
//Excursion Photos Showing
   $(".link1").click(function(){
        $(".item").hide();
        $(".photo1").show();
        $(".excursions-list li").css('color', '#848FA1');
        $(".link1").css('color', 'white');
    });
    $(".link2").click(function(){
        $(".item").hide();
        $(".photo2").show();
        $(".excursions-list li").css('color', '#848FA1');
        $(".link2").css('color', 'white');
    });
    $(".link3").click(function(){
        $(".item").hide();
        $(".photo3").show();
        $(".excursions-list li").css('color', '#848FA1');
        $(".link3").css('color', 'white');
    });
    $(".link4").click(function(){
        $(".item").hide();
        $(".photo4").show();
        $(".excursions-list li").css('color', '#848FA1');
        $(".link4").css('color', 'white');
    });
    $(".link5").click(function(){
        $(".item").hide();
        $(".photo5").show();
        $(".excursions-list li").css('color', '#848FA1');
        $(".link5").css('color', 'white');
    });
//Excursion Photos Showing Ends
});