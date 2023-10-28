$(document).ready(function(){
    $(".popular-slider").slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow:"<button type='button' class='slick-prev pull-left prev-arrow'><svg class='icon icon--black'><use xlink:href='images/sprite.svg#arrow'></use></svg></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next-arrow'><svg class='icon icon--black'><use xlink:href='images/sprite.svg#arrow'></use></svg></button>",
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            },
          },
          {
            breakpoint: 1028,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true,
              arrows: false,
            },
          },
        ],
      });   
});