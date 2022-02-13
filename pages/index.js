/* Для удобства проверки модального окна*/
let editBtn = document.querySelector('.button_target_edit-profile');
let closedPopupBtn = document.querySelector('.button_target_closed')
let popup = document.querySelector('.popup');

editBtn.addEventListener('click', function () {
  popup.classList.add('popup_status_opened');
});

closedPopupBtn.addEventListener('click', function () {
  popup.classList.remove('popup_status_opened');
});
