document.getElementById('currentYear').textContent = new Date().getFullYear();

$(function () {
    var bannerCarousel = $('.relaxWithSportsImg');

    bannerCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: true,
        autoplayTimeout: 800,
        smartSpeed: 800,
        nav: false,
        dots: false,
        items: 3,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            991: {
                items: 7
            }
        }
    });
});