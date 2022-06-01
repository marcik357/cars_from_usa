$(function () {

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    autopla: true,
                    slidesToScroll: 1,
                }
            },
        ]
    });

});