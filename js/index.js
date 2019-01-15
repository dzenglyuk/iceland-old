$(function() {
// Preloader Code
    let counter = 0;
    let c = 0;
    let i = setInterval(function(){
        $(".preloader .counter h1").html(c + "%");
        $(".preloader .counter hr").css("width", c + "%");
        counter++;
        c++;
      
        if(counter == 101) {
            clearInterval(i);
        }
    }, 50);
// Preloader Code Ends
//Map Showing Code
    $('.map-button').click(function() {
        $('.map-modal').show();
    });

    $('.close').click(function() {
        $('.map-modal').hide();
    });
//Map Showing Code Ends
// Redirection Button
    $('.gallery-button').click(() => {
        // window.location.href = 'gallery.html';
        $(location).attr('href','gallery.html');
    })
    
// Redirection Button Ends
//Form Showing
    $('.email-button').click(function() {
        $('.form-container').toggle(200);
    })
//Form Showing Ends
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
                name: name,
                last_name: last,
                email: email,
                message: text
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
//Smooth Scrolling
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
//Smooth Scrolling Ends
//Excursion Photos Showing
    function changeColor(e, value) {
        e.css('color', value);
    }
    
    const links = [$(".link1"), $(".link2"), $(".link3"), $(".link4"), $(".link5")];
    const items = [$(".photo1"), $(".photo2"), $(".photo3"), $(".photo4"), $(".photo5")];

    for (let i = 0; i < 5; i++) {
        links[i].click(function() {
            $(".item").hide();
            items[i].show();
            // $(".excursions-list li").css('color', '#848FA1');
            // links[i].css('color', 'white');
            changeColor($(".excursions-list li"),'#848FA1');
            changeColor(links[i],'white');
        });
    }
//Excursion Photos Showing Ends
});
$(window).on('load', () => {
    setTimeout(() => {
        let preloader = $('.preloader');
        if (!preloader.hasClass('done')) {
            preloader.addClass('done');
        }
    }, 1000)
 });