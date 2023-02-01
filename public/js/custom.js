$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 0) {
    $('.header').addClass('fix-top');
  } else {
    $('.header').removeClass('fix-top');
  }
});

var a = 0;
$(window).scroll(function () {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// $('.partners-images').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   infinite: true,
//   autoplaySpeed: 1000,
//   dots: false,
//   arrows: false,
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       infinite: true,
//       dots: true
//     }
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   }
//   ]
// });

// $('.g-img-content').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   infinite: true,
//   autoplaySpeed: 1500,
//   dots: false,
//   arrows: false,
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       infinite: true,
//       dots: true
//     }
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   }
//   ]
// });

// $('.testimonial-boxes').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   infinite: true,
//   autoplaySpeed: 1500,
//   dots: false,
//   arrows: false,
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       infinite: true,
//       dots: true
//     }
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1
//     }
//   }
//   ]
// });

// $(".navbar-toggler").click(function () {
//   $(".header").toggleClass('bg-wite');

// });



