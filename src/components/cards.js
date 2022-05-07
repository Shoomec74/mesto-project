//-- Импорты --//
import { openPopup } from './modal';
import { popupForBigPicture, popupImage, popupImageName, } from './data.js';

//-- Экспорты --//
export { createCard };

//-- Создание карточки, установка событий на каждый интерактивный элемент карточки,
//   возвращает готовую ноду для вставки на страницу --//
const createCard = (name, link) => {
  const placeTemplate = document.querySelector('#place').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');
  placeElement.querySelector('.place__name').textContent = name;
  placeImage.setAttribute('src', link);
  placeImage.setAttribute('alt', name);
  //-- По клику на иконку корзинки удаляем карточку с местом --//
  placeElement.querySelector('.button_target_delete').addEventListener('click', (evt) => {
    evt.target.closest('.place').remove();
  });
  //-- По клику на картинку места открываем попап с развернутой картинкой места --//
  placeElement.querySelector('.place__image').addEventListener('click', (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageName.textContent = popupImage.alt;
    openPopup(popupForBigPicture);
  });
  //-- По клику на иконку сердечка ставим лайк или дизлайк --//
  placeElement.querySelector('.button_target_like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_target_like-active');
  });
  return placeElement;
}


