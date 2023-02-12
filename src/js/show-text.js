export let buttonShowAllText = document.querySelector('.read-more__button')
export let cardsHiddenText = document.querySelector('.third-paragraph--hidden')
export let showAllIcon = document.querySelector('.read-more__icon')

buttonShowAllText.addEventListener('click', function () {
  cardsHiddenText.classList.toggle('third-paragraph--hidden')
  showAllIcon.classList.toggle('read-more__icon')

  if (cardsHiddenText.classList.contains('third-paragraph--hidden')) {
    buttonShowAllText.textContent = 'Читать далее'
  } else {
    buttonShowAllText.textContent = 'Скрыть'
  }
})
