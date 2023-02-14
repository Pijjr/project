import { burgerMenu } from './burger-menu'

export let modalFeedback = document.querySelector('.modal-feedback')
export let modalCall = document.querySelector('.modal-call')
export let mainPage = document.querySelector('.main-content')
export let burger = document.querySelector('.burger-menu')
export let buttonChat = document.querySelector('.button-message-burger')
export let buttonPhone = document.querySelector('.button-phone-burger')
export let header = document.querySelector('header')

buttonChat.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  burger.classList.add('page-blur')
  header.classList.add('page-blur')
  mainPage.classList.add('fixed')
})

buttonPhone.addEventListener('click', function () {
  modalCall.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  burger.classList.add('page-blur')
  header.classList.add('page-blur')
  mainPage.classList.add('fixed')
})

export let buttonCloseFeedback = document.querySelector(
  '.modal__button-feedback'
)
export let buttonCloseChat = document.querySelector('.modal__button-phone')

buttonCloseFeedback.addEventListener('click', function () {
  modalFeedback.classList.add('modal-container--hidden')
  mainPage.classList.remove('page-blur')
  burger.classList.remove('page-blur')
  header.classList.remove('page-blur')
  mainPage.classList.remove('fixed')
})

buttonCloseChat.addEventListener('click', function () {
  modalCall.classList.add('modal-container--hidden')
  mainPage.classList.remove('page-blur')
  burger.classList.remove('page-blur')
  header.classList.remove('page-blur')
  mainPage.classList.remove('fixed')
})

export let headerButtonCall = document.querySelector('.button-phone')
export let headerButtonChat = document.querySelector('.button-message')

headerButtonCall.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  header.classList.add('page-blur')
  burger.classList.add('page-blur')
  mainPage.classList.add('fixed')
})

headerButtonChat.addEventListener('click', function () {
  modalCall.classList.remove('modal-container--hidden')
  mainPage.classList.add('page-blur')
  header.classList.add('page-blur')
  burger.classList.add('page-blur')
  mainPage.classList.add('fixed')
})

mainPage.addEventListener('click', function () {
  modalFeedback.classList.add('modal-container--hidden')
  modalCall.classList.add('modal-container--hidden')
  mainPage.classList.remove('page-blur')
  burger.classList.remove('page-blur')
  header.classList.remove('page-blur')
  mainPage.classList.remove('fixed')
})
