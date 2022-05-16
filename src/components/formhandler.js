//-- Импорты --//
import {
  nameInput, aboutInput, username, aboutUsername, popupForEditProfile, placeInput, linkInput, popupForAddPlace,
  places, avatarInput, popupForEditAvatar, avatar
} from "./data.js";
import { closePopup } from "./modal.js";
import { inactiveButtonAfterSubmit, renderLoading } from "./utils.js";
import { updateUserInfo, addcardtoServer, updateAvatar, checkResponse } from "./api.js";
import { createCard } from "./cards.js";

//-- Обработка формы редактирования профиля --//
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  updateUserInfo(nameInput.value, aboutInput.value)
    .then(checkResponse, renderLoading(true, evt.target))
    .then((responseUserInfo) => {
      username.textContent = responseUserInfo.name;
      aboutUsername.textContent = responseUserInfo.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      renderLoading(false, evt.target, 'Сохранить')
      closePopup(popupForEditProfile);
      inactiveButtonAfterSubmit(evt.target);
    });
}

//-- Обработка формы добавления карточки с местом --//
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  addcardtoServer(placeInput.value, linkInput.value)
    .then(checkResponse, renderLoading(true, evt.target))
    .then((newCard) => {
      places.prepend(createCard(newCard.name, newCard.link, newCard.likes, newCard.owner._id, newCard._id));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      renderLoading(false, evt.target, 'Добавить');
      closePopup(popupForAddPlace);
      evt.currentTarget.reset();
      inactiveButtonAfterSubmit(evt.target);
    });
}

//-- Обработка формы добавления аватарки профиля --//
const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  updateAvatar(avatarInput.value)
    .then(checkResponse, renderLoading(true, evt.target))
    .then((responseUserAvatar) => {
      avatar.setAttribute('src', `${responseUserAvatar.avatar}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      renderLoading(false, evt.target, 'Обновить');
      closePopup(popupForEditAvatar);
      evt.currentTarget.reset();
      inactiveButtonAfterSubmit(evt.target);
    });
}

//-- Экспорты --//
export { handleProfileFormSubmit, handleAddCardFormSubmit, handleAvatarFormSubmit }
