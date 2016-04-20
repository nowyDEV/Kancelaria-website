/**
 * Created by Dominik on 2016-04-18.
 */
$(document).ready(function() {
   var servicesTop = $('.services').offset().top;
   var winHeight = $(window).height();

//SERVICES FLOATING
function services(x) {
    var offset,
        goal = servicesTop - winHeight / 8;

    if (x < goal) {
        offset = Math.min(0.005 * Math.pow(x - goal, 2), winHeight);
    }
    else {
        offset = 0;
    }

    $('.service1').css({'transform': 'translate('+ -offset + 'px, '+ offset * 0.2 + 'px)'});
    $('.service3').css({'transform': 'translate('+ offset + 'px, '+ offset * 0.2 + 'px)'});
}

//WINDOW USER SCROLLING

//CERTIFICATES DISPLAY
$(window).scroll(function() {
    var userScroll = $(this).scrollTop();

    if (userScroll > $('.certificates').offset().top -
        ($(window).height() / 1.2)) {

        $('.certificates a').each(function(event) {

            setTimeout(function() {

                $('.certificates a').eq(event).addClass('display');

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

    services(userScroll);

});
});

