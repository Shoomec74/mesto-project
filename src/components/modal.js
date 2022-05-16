//-- Импорты --//
import { popups } from './data.js';

//-- Слушатель для закрытия поапа по клавише Escaoe --//
function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_status_opened'));
  }
}

//-- Открытие модального окна --//
const openPopup = (namePopup) => {
  document.addEventListener('keydown', handleEscKey);
  namePopup.classList.add('popup_status_opened');
}

//-- Закрытие модального окна при submit формы --//
const closePopup = (namePopup) => {
  document.removeEventListener('keydown', handleEscKey);
  namePopup.classList.remove('popup_status_opened');
}

//-- Отлавливаем клик на кнопке закрытия всех попапов --//
const setEventListenerForClosingPopup = () => {
  popups.forEach(el =>
    el.addEventListener('click', (evt) => {
      if (evt.target.className.includes('button_target_closed')) {
        closePopup(el);
      }
      else if (evt.target.className === 'popup__heading' || evt.target.className === 'popup__image') {
        evt.stopPropagation();
      }
      else if (evt.target.className.includes('popup')) {
        closePopup(el);
      }
    }
    ));
}

//-- Экспорты --//
export { setEventListenerForClosingPopup, openPopup, closePopup };
