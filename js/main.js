$(document).ready(function () {
    const mMenuBtn = $(".mobile_buttons");
    const mMenu = $(".curtain");
    const tab = $('.tab')
    const tabContent = $('.tabs_content')
    mMenuBtn.on('click', function() {
        mMenu.toggleClass("active")
        $("body").toggleClass("no-scroll")
    });

    tab.on('click', function() {
        tab.toggleClass('active')
        tabContent.toggleClass('visible')
    });
    
    var mySwiper = new Swiper(".swiper-container", {
        speed: 500,
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.button_next',
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