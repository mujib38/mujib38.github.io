const swiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 500,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    effect: "slide",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
