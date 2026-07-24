const swiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    effect: "slide",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
