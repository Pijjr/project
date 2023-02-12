import Swiper from './swiper-bundle.min.js'

export const slider = document.querySelector('.swiper')

export let mySwiper

export function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      spaceBetween: 12,
      slidesPerView: 1,
      width: 240,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false'
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
