$(document).ready(function(){
    var mySwiper = new Swiper ('.banners-block.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        nextButton: '.banners-block .swiper-next',
        prevButton: '.banners-block .swiper-prev'
    });


    $('.add-to-card').on('click', function(e){
        e.preventDefault();
        console.log(e.currentTarget);
    })
});