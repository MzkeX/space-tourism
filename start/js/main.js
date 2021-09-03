$(function() {
    $('.slider__box').slick({
        prevArrow: '<img src="images/arrow_left.svg" alt="alt" class="slider__arrow arrow-left">',
        nextArrow: '<img src="images/arrow_right.svg" alt="alt" class="slider__arrow arrow-right">'
    });

    $('.menu_btn').on('click', function() {
        $('.menu__list').toggleClass('active');
    });
});