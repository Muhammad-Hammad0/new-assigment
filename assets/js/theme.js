// number-count-function

$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// testimonial-slider

$('.testi-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></div>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// project-slider

$('.why-chose-us-wrapper').slick({
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 1,
    speed: 900,
    arrows: false,
    dots: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

// mobile-app-slider

$('.app-devel-slide-main').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="far fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="far fa-angle-right"></i></div>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                arrows: false,
                dots: true,
            },
        },
    ],
});


// nft-slider

$('.nft-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="far fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="far fa-angle-right"></i></div>',
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        },
    }, ],
});

// nft-collection-slider

$('.nft-collection-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});

// responsive-menu-dropdown-links

$('.resp-menu-item ul li .more').click(function() {
    $('.resp-menu-item ul li .more').not(this).children('i').removeClass('active');
    $(this).children('i').toggleClass('active');
    $('.resp-menu-item ul li ul').not($(this).next()).slideUp();
    $(this).siblings('ul').slideToggle();
});

// counter

jQuery(window).scroll(startCounter);

function startCounter() {
    if (jQuery(window).scrollTop() > 1500) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.animate-count').each(function() {
            var $this = jQuery(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 9000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

// horizontal-accordian

$('.service-item').click(function() {
    $('.service-item-box').removeClass('active');
    $(this).closest('.service-item-box').addClass('active');
});

// responsive-entry-function

$('.menu-box a').click(function() {
    $('.responsive-menu').addClass('active');
});

// responsive-exit-function

$('.cross-btn a').click(function() {
    $('.responsive-menu').removeClass('active');
});

// fancy-box-js

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// isotopes-js

$('.project-item-head').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('.gallery-btns ul li').click(function() {
    $('.gallery-btns ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.project-item-head').isotope({
        filter: selector
    });
    return false;
});

// feedback slider

$('.feedback-content-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: true,
    asNavFor: '.feedback-img-main',
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></div>'
});

$('.feedback-img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    asNavFor: '.feedback-content-main',
    arrows: false,
    dots: false
});

// Cursor pointer

function mousemoveHandler(e) {
    try {
        const target = e.target;

        let tl = gsap.timeline({
            defaults: {
                x: e.clientX,
                y: e.clientY,
            }
        })
        let t2 = gsap.timeline({
            defaults: {
                x: e.clientX,
                y: e.clientY,
            }
        })


        // Main Cursor Moving 

        tl.to(".cursor1", {
                ease: "power2.out"
            })
            .to(".cursor2", {
                ease: "power2.out"
            }, "-=0.4")

    } catch (error) {
        console.log(error)
    }

}
document.addEventListener("mousemove", mousemoveHandler);

// loader-jquery

$(document).ready(function() {
    setTimeout(function() {
        $("#preloader").addClass('remove');
    }, 1000);
});

// gsap-config

gsap.config({
    nullTargetWarn: false,
});


// mob-service-slider

$('.mob-service').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '50px',
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '50px',
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '50px',
            },
        },
    ],
});