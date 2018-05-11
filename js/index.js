// Map Showing Code
(function() {
    document.querySelector('.map-button').addEventListener('click', mapShowing)

    function mapShowing() {
        let x = document.querySelector('.map-container');
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    }
// Map Showing Code Ends
// Form Showing
    document.querySelector('.email-button').addEventListener('click', formShowing)

    function formShowing() {
        let x = document.querySelector('.form-container');
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    }
// Form Showing Ends
//Smooth Scrolling
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
    //Smooth Scrolling Ends
})();
