$(document).ready(function(){

    console.log("The DOM is now loaded and can be manipulated.")

    $(".menu__hamburger--toggle").on("click", function() {
    
        if($(".menu__item").hasClass("active")){
            $(".menu__item").removeClass("active")
        }
        else {
            $(".menu__item").hasClass("active")
            $(".menu__item").addClass("active")
        }
    });

    $(".menu__item").on("click", function() {
    
        if($(".menu2__item2").hasClass("active")){
            $(".menu2__item2").removeClass("active")
        }
        else {
            $(".menu2__item2").hasClass("active")
            $(".menu2__item2").addClass("active")
        }
    });


    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="teaser-prev teaser-arrow"></button>',
        nextArrow: '<button class="teaser-next teaser-arrow"></button>',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 800,
            }
        ]
    });


    $('.hardware-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="hardware-prev hardware-arrow"></button>',
        nextArrow: '<button class="hardware-next hardware-arrow"></button>',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 800,
            }
        ]
    });
});