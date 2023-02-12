export const showButton = document.querySelector('.show-all__button')
export const hiddenParts = document.querySelector(
  '.brands-catalog__list--hidden'
)
export const showLess = document.querySelector('.show-all__icon')

showButton.addEventListener('click', function () {
  hiddenParts.classList.toggle('brands-catalog__list--hidden')
  showLess.classList.toggle('show-all__icon')

  if (hiddenParts.classList.contains('brands-catalog__list--hidden')) {
    showButton.textContent = 'Показать всё'
  } else {
    showButton.textContent = 'Скрыть'
  }
})
