export const burgerMenu = document.querySelector('.burger-menu')
export const buttonBurger = document.querySelector('.button-burger')
export const contentContainer = document.querySelector('.main-content')

buttonBurger.addEventListener('click', function () {
  burgerMenu.classList.remove('burger_menu--hidden')
  burgerMenu.classList.add('burger-menu--absolute')
  contentContainer.classList.add('page-blur')
  contentContainer.classList.add('fixed')
})

export const closeButton = document.querySelector('.button-close')

closeButton.addEventListener('click', function () {
  burgerMenu.classList.add('burger_menu--hidden')
  burgerMenu.classList.remove('burger-menu--absolute')
  contentContainer.classList.remove('page-blur')
  contentContainer.classList.remove('fixed')
})

contentContainer.addEventListener('click', function () {
  burgerMenu.classList.add('burger_menu--hidden')
  burgerMenu.classList.remove('burger-menu--absolute')
  contentContainer.classList.remove('page-blur')
  contentContainer.classList.remove('fixed')
})
