//-- Импорты --//
import { nameInput, aboutInput, username, aboutUsername, popupForEditProfile, validationSettings, popups } from './data.js';
import { openPopup } from './utils.js';
import { enableValidation, resetInputsAndErrors } from './validate.js';
import { closePopup } from './utils.js';

//-- Экспорты --//
export { openPopupEditProfile, setEventListenerForClosingPopup };

//-- Открытие модального окна редактирования профиля с заполненными полями ввода--//
const openPopupEditProfile = () => {
  enableValidation(validationSettings);
  nameInput.value = username.textContent;
  aboutInput.value = aboutUsername.textContent;
  openPopup(popupForEditProfile);
}

//-- Отлавливаем клик на кнопке закрытия всех попапов --//
const setEventListenerForClosingPopup = () => {
  popups.forEach(el =>
    el.addEventListener('click', (evt) => {
      if (evt.target.className.includes('button_target_closed')) {
        closePopup(el);
        resetInputsAndErrors(evt.currentTarget);
      }
      else if (evt.target.className === 'popup__heading' || evt.target.className === 'popup__image') {
        evt.stopPropagation();
      }
      else if (evt.target.className.includes('popup')) {
        closePopup(el);
        resetInputsAndErrors(evt.currentTarget);
      }
    }
    ));
}



