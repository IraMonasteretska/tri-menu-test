$(document).ready(function () {

    $('.adussect-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1601,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },

        ]
    });

    $('.reviewsslider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        appendArrows: '.reviewssliderbtns',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            },


        ]
    });

    $('.header__bottsection .menu1 .pointbtn button').click(function () {
        $('.header__bottsection').toggleClass('show');
    });




    const players = Plyr.setup('.js-player');

    // menu
    $('.mibilenavlist .sublink > a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('rotate');
        $(this).next('.submenu').slideToggle();
    })

    $('.burger').click(function () {
        $('.mobilemenu-wrapper').addClass('show');
    });
    $('.closemenu').click(function () {
        $('.mobilemenu-wrapper').removeClass('show');
    });


    // read more
    $('.team__readmore').click(function () {
        $(this).find('text').toggle();
        $(this).parents('.teammate-descr').find('.textbox').toggleClass('show');
    });


    $('.tabssection__tabbtn').click(function () {
        $('.tabssection__tabbtn').removeClass('active');
        $(this).addClass('active');
    });

    $('.tabbtn1').click(function () {
        $('.tabcontent').addClass('hide');
        $('.tabcont1').removeClass('hide');
    });
    $('.tabbtn2').click(function () {
        $('.tabcontent').addClass('hide');
        $('.tabcont2').removeClass('hide');
    });
    $('.tabbtn3').click(function () {
        $('.tabcontent').addClass('hide');
        $('.tabcont3').removeClass('hide');
    });

    // social fixed box
    $('.iconsect').click(function () {
        $('.iconsect img').toggle();
        $('.socfix__group').toggleClass('show');

    });











    // NEW NEW NEW 27.05
    $('.mobilemenu-wrapper .submenu .subsublink > a').click(function (e) {

        e.preventDefault();

        $(this).next('.subsubmenu').slideToggle();




    });









});