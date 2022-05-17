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
  renderLoading(true, evt.target);
  updateUserInfo(nameInput.value, aboutInput.value)
    .then((responseUserInfo) => {
      username.textContent = responseUserInfo.name;
      aboutUsername.textContent = responseUserInfo.about;
      closePopup(popupForEditProfile);
      inactiveButtonAfterSubmit(evt.target);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt.target, 'Сохранить')
    });
}

//-- Обработка формы добавления карточки с местом --//
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  addcardtoServer(placeInput.value, linkInput.value)
    .then(newCard => {
      places.prepend(createCard(newCard.name, newCard.link, newCard.likes, newCard.owner._id, newCard._id, newCard.owner._id));
      closePopup(popupForAddPlace);
      inactiveButtonAfterSubmit(evt.target);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt.target, 'Добавить');
    });
}

//-- Обработка формы добавления аватарки профиля --//
const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  updateAvatar(avatarInput.value)
    .then((responseUserAvatar) => {
      avatar.setAttribute('src', `${responseUserAvatar.avatar}`);
      closePopup(popupForEditAvatar);
      inactiveButtonAfterSubmit(evt.target);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      renderLoading(false, evt.target, 'Обновить');
    });
}

//-- Экспорты --//
export { handleProfileFormSubmit, handleAddCardFormSubmit, handleAvatarFormSubmit }
