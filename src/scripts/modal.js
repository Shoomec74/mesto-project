import {nameInput, aboutInput, username, aboutUsername, popupForEditProfile} from './data.js';
import { openPopup } from './utils.js';

//-- Открытие модального окна редактирования профиля с заполненными полями ввода--//
export function openPopupEditProfile() {
  nameInput.value = username.textContent;
  aboutInput.value = aboutUsername.textContent;
  openPopup(popupForEditProfile);
}


