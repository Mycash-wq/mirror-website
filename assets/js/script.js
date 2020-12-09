$(window).load(function () {
    $(".container").css( "opacity", "1" );
    $(".media-carousel").owlCarousel({
        loop: false,
        nav: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 2,
                margin: 15
            },
            1024: {
                items: 2,
                margin: 20
            }
        }
    });

    // if(window.location.hash) {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#news").offset().top
    //     }, 1);
    //   }
});