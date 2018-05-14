$(function() {
// Map Showing Code
   $('.map-button').click(function() {
       $('.map-modal').css('display', 'block'); 
    });
    
    $('.close').click(function() {
       $('.map-modal').css('display', 'none'); 
    });
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
    let links = [$(".link1"), $(".link2"), $(".link3"), $(".link4"), $(".link5")];
    let items = [$(".photo1"), $(".photo2"), $(".photo3"), $(".photo4"), $(".photo5")];
    
    for (let i = 0; i < 5; i++) {
        links[i].click(function(){
        $(".item").hide();
        items[i].show();
        $(".excursions-list li").css('color', '#848FA1');
        links[i].css('color', 'white');
        });
    }
//Excursion Photos Showing Ends
//Form Sending
    $("[type='submit']").click(function(e) {

        e.preventDefault();
        
        const name = $("[name='name']").val();
        const last = $("[name='last-name']").val();
        const email = $("[name='email']").val();
        const text = $("[name='text']").val();
          
        $.ajax({
            url: "https://tranquil-sierra-86540.herokuapp.com/dzenglyuk23@ukr.net",  
            method: "POST",
            data: {
                name: name.value,
                last_name: last.value,
                email: email.value,
                message: text.value,
            },
        dataType: "json"
    }).done(function() {
        $('form').find("input[type=text], input[type=email] ").val("");
        $('form').hide();
        setTimeout(function() { $('form').show(); }, 2000);
        $('.thankYouBlock').show();
        setTimeout(function() { $('.thankYouBlock, .form-container').hide(); }, 2000);
        });
    });
//Form Sending Ends
});








