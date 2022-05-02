//-- Открытие модального окна --//
export function openPopup(namePopup) {
  namePopup.classList.add('popup_status_opened');
}

//-- Закрытие модального окна при submit формы --//
export function closePopup(namePopup) {
  namePopup.classList.remove('popup_status_opened');
}
