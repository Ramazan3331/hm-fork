$(document).ready(function(){
    $(".popular-slider").slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow:"<button type='button' class='slick-prev pull-left prev-arrow'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next-arrow'></button>",
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            },
          },
          {
            breakpoint: 1024,
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
      $(".arrival-slider").slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:"<button type='button' class='slick-prev pull-left prev-arrow'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right next-arrow'></button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
});
