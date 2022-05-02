import './index.css';
import {cardsContent, places, formEditProfile, formAddplace, profileEditButton, username, aboutUsername, nameInput, aboutInput, popupForEditProfile, placeAddButton, popups, placeInput, linkInput, popupForAddPlace} from './scripts/data.js';
import {createCard, initialCards} from './scripts/cards.js';
import {enableValidation} from './scripts/validate.js';
import {openPopupEditProfile} from './scripts/modal.js';
import {openPopup, closePopup} from './scripts/utils.js';

//-- Инициализируем места при загрузке страницы --//
initialCards(cardsContent, places);

//-- Обработка формы редактирования профиля --//
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  aboutUsername.textContent = aboutInput.value;
  closePopup(popupForEditProfile);
}

//-- Обработка формы добавления карточки с местом --//
function formSubmitHandlerAddPlace(evt) {
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

//-- Отлавливаем клик на кнопке закрытия всех попапов --//
popups.forEach(el =>
  el.addEventListener('click', (evt) => {
    if (evt.target.className === 'button button_target_closed') {
      closePopup(el);
    }
  }));

