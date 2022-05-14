//-- Импорты --//
import {
  nameInput, aboutInput, username, aboutUsername, popupForEditProfile, placeInput, linkInput, popupForAddPlace,
  places, avatarInput, popupForEditAvatar, avatar
} from "./data.js";
import { closePopup } from "./modal.js";
import { inactiveButtonAfterSubmit, renderLoading } from "./utils.js";
import { updateUserInfo, addcardtoServer, updateAvatar } from "./api.js";
import { createCard } from "./cards.js";

//-- Экспорты --//
export { handleProfileFormSubmit, handleAddCardFormSubmit, handleAvatarFormSubmit }

//-- Обработка формы редактирования профиля --//
const handleProfileFormSubmit = (evt) => {

  renderLoading(true, evt.target);
  evt.preventDefault();
  updateUserInfo(nameInput.value, aboutInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((responseUserInfo) => {
      username.textContent = responseUserInfo.name;
      aboutUsername.textContent = responseUserInfo.about;
    })
    .catch((err) => {
      console.log(err);
    });
  renderLoading(false, evt.target);
  closePopup(popupForEditProfile);
  inactiveButtonAfterSubmit(evt.target);
}

//-- Обработка формы добавления карточки с местом --//
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  addcardtoServer(placeInput.value, linkInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((newCard) => {
      places.prepend(createCard(newCard.name, newCard.link, newCard.likes, newCard.owner._id, newCard._id));
    })
    .catch((err) => {
      console.log(err);
    });
  renderLoading(false, evt.target);
  closePopup(popupForAddPlace);
  evt.currentTarget.reset();
  inactiveButtonAfterSubmit(evt.target);
}

//-- Обработка формы добавления аватарки профиля --//
const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  updateAvatar(avatarInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((responseUserAvatar) => {
      avatar.setAttribute('src', `${responseUserAvatar.avatar}`);
    })
    .catch((err) => {
      console.log(err);
    });
  renderLoading(false, evt.target);
  closePopup(popupForEditAvatar);
  evt.currentTarget.reset();
  inactiveButtonAfterSubmit(evt.target);
}
