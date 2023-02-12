import Swiper from './swiper-bundle.min.js'

export let sliderPrice = document.querySelector('.swiper-prices')

export let mySwiperPrice

export function mobileSliderPrice() {
  if (window.innerWidth <= 767 && sliderPrice.dataset.mobile == 'false') {
    mySwiperPrice = new Swiper(sliderPrice, {
      spaceBetween: 12,
      slidesPerView: 1,
      width: 260,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    sliderPrice.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    sliderPrice.dataset.mobile = 'false'
    if (sliderPrice.classList.contains('swiper-initialized')) {
      mySwiperPrice.destroy()
    }
  }
}

mobileSliderPrice()

window.addEventListener('resize', () => {
  mobileSliderPrice()
})
