//-- Импорты --//
import '../index.css';
import { getInitialCards, getUserInfo, api} from '../components/api.js'
import {
  places, formEditProfile, formAddplace, profileEditButton, username, aboutUsername, nameInput,
  aboutInput, popupForEditProfile, placeAddButton, popupForAddPlace, validationSettings,
  avatarEditButton, popupForEditAvatar, formEditAvatar, avatar
} from '../components/data.js';
import { createCard } from '../components/cards.js';
import { setEventListenerForClosingPopup, openPopup } from '../components/modal.js';
import { enableValidation, resetInputsAndErrors } from '../components/validate.js'
import { handleAvatarFormSubmit, handleProfileFormSubmit, handleAddCardFormSubmit, } from '../components/formHandler.js';


api.getUserInfo().then((res) => console.log(res));
//-- Инициализация карточек на страницу --//
const initialCards = (cards, container, userId) => {
  cards.forEach(card => {
    container.append(createCard(card.name, card.link, card.likes, card.owner._id, card._id, userId));
  });
}

//-- Инициализируем данные профиля --//
getUserInfo()
  .then((responseUserInfo) => {
    const userId = responseUserInfo._id;
    username.textContent = responseUserInfo.name;
    aboutUsername.textContent = responseUserInfo.about;
    avatar.setAttribute('src', `${responseUserInfo.avatar}`);
    //-- Инициализируем карточек при загрузке страницы --//
    getInitialCards()
      .then((result) => {
        initialCards(result, places, userId);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

//-- Установка слушателей для закрытия попапов  --//
setEventListenerForClosingPopup();

//-- Установка слушателя сабмита формы редактирования аватара  --//
formEditAvatar.addEventListener('submit', handleAvatarFormSubmit);

//-- Установка слушателя сабмита формы редактирования профиля  --//
formEditProfile.addEventListener('submit', handleProfileFormSubmit);

//-- Установка слушателя сабмита формы добавления карточки  --//
formAddplace.addEventListener('submit', handleAddCardFormSubmit);

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

avatarEditButton.addEventListener('click', () => {
  resetInputsAndErrors(popupForEditAvatar);
  openPopup(popupForEditAvatar);
});

//-- Валидация форм --//
enableValidation(validationSettings);
