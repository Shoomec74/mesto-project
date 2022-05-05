//-- Импорты --//
import { validationSettings } from "./data";
import { enableValidation } from "./validate";

//-- Экспорты --//
export { openPopup, closePopup };

//-- Открытие модального окна --//
const openPopup = (namePopup) => {
  enableValidation(validationSettings);
  namePopup.classList.add('popup_status_opened');
}

//-- Закрытие модального окна при submit формы --//
const closePopup = (namePopup) => {
  namePopup.classList.remove('popup_status_opened');
}
