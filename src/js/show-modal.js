import { burgerMenu } from './burger-menu'

export let modalFeedback = document.querySelector('.modal-feedback')
export let modalCall = document.querySelector('.modal-call')
export let mainPage = document.querySelector('.main-content')
export let burger = document.querySelector('.burger-menu')
export let buttonChat = document.querySelector('.button-message-burger')
export let buttonPhone = document.querySelector('.button-phone-burger')

buttonChat.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  burger.classList.add('page-blur')
})

buttonPhone.addEventListener('click', function () {
  modalCall.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  burger.classList.add('page-blur')
})

export let buttonCloseFeedback = document.querySelector(
  '.modal__button-feedback'
)
export let buttonCloseChat = document.querySelector('.modal__button-phone')

buttonCloseFeedback.addEventListener('click', function () {
  modalFeedback.classList.add('modal-container--hidden')
  mainPage.classList.remove('page-blur')
  burger.classList.remove('page-blur')
})

buttonCloseChat.addEventListener('click', function () {
  modalCall.classList.add('modal-container--hidden')
  mainPage.classList.remove('page-blur')
  burger.classList.remove('page-blur')
})

export let headerButtonCall = document.querySelector('.button-phone')
export let headerButtonChat = document.querySelector('.button-message')

headerButtonCall.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
})

headerButtonChat.addEventListener('click', function () {
  modalCall.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
})
