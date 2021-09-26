// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination"
    }
  });
  
  var testimonialThumbs = new Swiper(".testimonial-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    // autoplay: true,
    loop: true,
    speed: 3000
  });
  var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    // autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
      swiper: testimonialThumbs
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });