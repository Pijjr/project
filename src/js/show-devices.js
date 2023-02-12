import { showLess } from './show-brands'

export let showDevicesButton = document.querySelector(
  '.show-all_button-devices'
)
export let hiddenDevices = document.querySelector(
  '.devices-catalogue__list--hidden'
)
export let showLessIcon = document.querySelector('.show-all__devices-icon')

showDevicesButton.addEventListener('click', function () {
  hiddenDevices.classList.toggle('devices-catalogue__list--hidden')
  showLessIcon.classList.toggle('show-all__devices-icon')

  if (hiddenDevices.classList.contains('devices-catalogue__list--hidden')) {
    showDevicesButton.textContent = 'Показать всё'
  } else {
    showDevicesButton.textContent = 'Скрыть'
  }
})
