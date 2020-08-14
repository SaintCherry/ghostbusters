$(document).ready(function () {
    const mMenuBtn = $(".mobile_buttons");
    const mMenu = $(".curtain")
    mMenuBtn.on('click', function() {
        mMenu.toggleClass("active")
        $("body").toggleClass("no-scroll")
    });
    var mySwiper = new Swiper(".swiper-container", {
        speed: 500,
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            612: {
                slidesPerView: 2,
            },
            312: {
                slidesPerView: 1,
            },
        }
    });
});