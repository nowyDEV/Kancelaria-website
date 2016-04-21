/**
 * Created by Dominik on 2016-04-18.
 */
$(document).ready(function() {

//WINDOW USER SCROLLING

$(window).scroll(function() {
    var userScroll = $(this).scrollTop();

    //NAVBAR CHANGE ON SCROLL
    if (userScroll > $('header').height() ) {
        $('header ul.nav').css({
            background: "rgba(0, 0, 0, 0.4)",
            marginTop: 0 + "px"
        });
    }
    else {
        $('header ul.nav').css({
            background: "none",
            marginTop: 20 + "px"
        });
    }

    //CERTIFICATES DISPLAY
    if (userScroll > $('.certificates').offset().top -
        ($(window).height() / 1.2)) {

        $('.certificate a').each(function(event) {

            setTimeout(function() {

                $('.certificate a').eq(event).addClass('display');

            }, 150 * (event + 1));
        });
    }

    //ABOUT TEXT DISPLAY
    if (userScroll > $('.aboutText').offset().top -
        ($(window).height() / 1.2)) {

        $('.aboutText p').each(function(event) {

            setTimeout(function() {

                $('.aboutText p').eq(event).addClass('display');

            }, 150 * (event + 1));
        });
    }

});
});

