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
        $('.other-image li a').removeClass('active');
        var big_img_url = $('img', this).attr('src');
        $('.main-image img').attr('src', big_img_url);
        $(this).addClass('active');
    });


    function counterCtrl (target){

        var maxValue = 10,
            currentButton = $(target),
            currentOperator = $(target).attr('data-attr'),
            labelQuantity = $(target).closest('.wrap').find('.quantity'),
            currentValue = $(target).closest('.wrap').find('.quantity').attr('data-quantity'),
            num = 1;

        if($(target).hasClass('unactive')){
            return false;
        }

        if($(target).attr('data-attr') != 0 && currentValue < maxValue ) {
            num = parseInt(currentValue, 10) + 1;
            labelQuantity.attr('data-quantity', num);
            labelQuantity.text(num);
        }else if(currentValue > 1 && currentValue < maxValue){
            num = parseInt(currentValue, 10) - 1;
            labelQuantity.attr('data-quantity', num);
            labelQuantity.text(num);
        }else if(currentValue == maxValue && currentOperator == 0){
            num = parseInt(currentValue, 10) - 1;
            labelQuantity.attr('data-quantity', num);
            labelQuantity.text(num);
        }
    }
    $("[data-attr='counter'] .caret").on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        counterCtrl(this);
    });

    $('.rating:not(.static) .rating-input').on('click', function(){
        $(this).closest('.rating').find('li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.phoneField input').mask("+7 (999) 999-99-99");
});