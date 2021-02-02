$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png" alt=""></button>',
    });
  });