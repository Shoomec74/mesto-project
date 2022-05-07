//-- Импорты --//
import { popups, nameInput, aboutInput, username, aboutUsername } from './data.js';
import { resetInputsAndErrors } from "./validate";

//-- Экспорты --//
export { setEventListenerForClosingPopup, openPopup, closePopup };

function setEventListenerForClosingPopupToKey(evt, namePopup) {
  if (evt.key === 'Escape') {
    closePopup(namePopup);
  }
}

//-- Открытие модального окна --//
const openPopup = (namePopup) => {
  if (namePopup.className.includes('popup_for_edit-profile')) {
    resetInputsAndErrors(namePopup);
    nameInput.value = username.textContent;
    aboutInput.value = aboutUsername.textContent;
    document.addEventListener('keydown', evt => {
      setEventListenerForClosingPopupToKey(evt, namePopup)
    });
    namePopup.classList.add('popup_status_opened');
  }
  else {
    resetInputsAndErrors(namePopup);
    document.addEventListener('keydown', evt => {
      setEventListenerForClosingPopupToKey(evt, namePopup)
    });
    namePopup.classList.add('popup_status_opened');
  }
}

//-- Закрытие модального окна при submit формы --//
const closePopup = (namePopup) => {
  document.removeEventListener('keydown', setEventListenerForClosingPopupToKey);
  namePopup.classList.remove('popup_status_opened');
}


//-- Отлавливаем клик на кнопке закрытия всех попапов --//
const setEventListenerForClosingPopup = () => {
  popups.forEach(el =>
    el.addEventListener('click', (evt) => {
      if (evt.target.className.includes('button_target_closed')) {
        closePopup(el);
      }
      else if (evt.target.className === 'popup__heading' || evt.target.className === 'popup__image') {
        evt.stopPropagation();
      }
      else if (evt.target.className.includes('popup')) {
        closePopup(el);
      }
    }
    ));
}



