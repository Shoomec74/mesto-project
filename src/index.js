//-- Импорты --//
import './index.css';
import {
  cardsContent, places, formEditProfile, formAddplace, profileEditButton, username, aboutUsername, nameInput,
  aboutInput, popupForEditProfile, placeAddButton, placeInput, linkInput, popupForAddPlace, popups, validationSettings
} from './scripts/data.js';
import { createCard, initialCards } from './scripts/cards.js';
import { openPopupEditProfile, setEventListenerForClosingPopup } from './scripts/modal.js';
import { openPopup, closePopup } from './scripts/utils.js';
import { resetInputsAndErrors } from './scripts/validate.js'

//-- Инициализируем места при загрузке страницы --//
initialCards(cardsContent, places);
setEventListenerForClosingPopup();

//-- Обработка формы редактирования профиля --//
const formSubmitHandler = (evt) => {
  evt.preventDefault();
  username.textContent = nameInput.value;
  aboutUsername.textContent = aboutInput.value;
  closePopup(popupForEditProfile);
}

//-- Обработка формы добавления карточки с местом --//
const formSubmitHandlerAddPlace = (evt) => {
  evt.preventDefault();
  places.prepend(createCard(placeInput.value, linkInput.value));
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupForAddPlace);
}

//-- Сабмитим форму редактирования профиля --//
formEditProfile.addEventListener('submit', (formSubmitHandler));

//-- Сабмитим форму добавления места профиля --//
formAddplace.addEventListener('submit', (formSubmitHandlerAddPlace));

//-- Открываем модалку редактирвоания профиля --//
profileEditButton.addEventListener('click', (openPopupEditProfile));

//-- Открываем модалку добавления карточки с местом --//
placeAddButton.addEventListener('click', () => openPopup(popupForAddPlace));

//-- Закрытие модальных окон по клавише escape --//
popups.forEach(el => {
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
      closePopup(el);
      resetInputsAndErrors(el);
    }
  });
});
