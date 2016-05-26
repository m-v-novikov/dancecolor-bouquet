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
    });
    $('#myModal').modal('hide');

    if($('#map').length){
        ymaps.ready(mapInit);
        function mapInit(){
            var map = new ymaps.Map("map", {
                center: [54.78443890751319,32.047982201215426],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"]
            });

            var myPlacemark = new ymaps.Placemark([54.78443890751319,32.047982201215426], { balloonContent: 'Букет<br/> г. Смоленск, Ул. Пржевальского д.2' });

            map.geoObjects.add(myPlacemark);
        }
    }

    $('.other-image li a').on('click', function(e){
        e.preventDefault();
        var big_img_url = $('img', this).attr('src');
        $('.main-image img').attr('src', big_img_url);
    });

    $('.phoneField input').mask("+7 (999) 999-99-99");
});