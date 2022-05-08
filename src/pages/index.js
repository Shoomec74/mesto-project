//-- Импорты --//
import '../index.css';
import {
  cardsContent, places, formEditProfile, formAddplace, profileEditButton, username, aboutUsername, nameInput,
  aboutInput, popupForEditProfile, placeAddButton, placeInput, linkInput, popupForAddPlace, validationSettings
} from '../components/data.js';
import { createCard } from '../components/cards.js';
import { setEventListenerForClosingPopup, openPopup, closePopup } from '../components/modal.js';
import { enableValidation, resetInputsAndErrors } from '../components/validate.js'
import {inactiveButtonBeforeSubmit} from '../components/utils.js';

//-- Инициализация карточек на страницу --//
const initialCards = (cards, container) => {
  cards.forEach(card => {
    container.append(createCard(card.name, card.src));
  });
}

//-- Инициализируем места при загрузке страницы --//
initialCards(cardsContent, places);
setEventListenerForClosingPopup();

//-- Обработка формы редактирования профиля --//
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  username.textContent = nameInput.value;
  aboutUsername.textContent = aboutInput.value;
  closePopup(popupForEditProfile);
  inactiveButtonBeforeSubmit(evt.target);
}

//-- Обработка формы добавления карточки с местом --//
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  places.prepend(createCard(placeInput.value, linkInput.value));
  closePopup(popupForAddPlace);
  evt.currentTarget.reset();
  inactiveButtonBeforeSubmit(evt.target);
}

//-- Сабмитим форму редактирования профиля --//
formEditProfile.addEventListener('submit', (handleProfileFormSubmit));

//-- Сабмитим форму добавления места профиля --//
formAddplace.addEventListener('submit', (handleAddCardFormSubmit));

//-- Открываем модалку редактирвоания профиля --//
profileEditButton.addEventListener('click', () => {
  resetInputsAndErrors(popupForEditProfile);
  nameInput.value = username.textContent;
  aboutInput.value = aboutUsername.textContent;
  openPopup(popupForEditProfile);
});

//-- Открываем модалку добавления карточки с местом --//
placeAddButton.addEventListener('click', () => {
  resetInputsAndErrors(popupForAddPlace);
  openPopup(popupForAddPlace);
});

//-- Валидация форм --//
enableValidation(validationSettings);
