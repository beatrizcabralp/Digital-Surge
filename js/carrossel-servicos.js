export default function iniciarCarrossel ()
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      1200: {
        slidesPerView: 2.7,
        spaceBetween: 20
      },
      
      900: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      
      600: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },

      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },

  
});
}









