//-- Импорты --//
import { openPopup } from './modal';
import { popupForBigPicture, popupImage, popupImageName } from './data.js';
import { renderForCountLikes } from './utils.js';
import { deleteCard, addLikesTocard, removeLikesTocard, checkResponse } from './api.js';

//-- Создание карточки, установка событий на каждый интерактивный элемент карточки,
//   возвращает готовую ноду для вставки на страницу --//
const createCard = (name, link, likes, cardOwnerId, cardId, userId) => {
  const placeTemplate = document.querySelector('#place').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');
  const countPlaceLikes = placeElement.querySelector('.place__count-like');
  const deleteButton = placeElement.querySelector('.button_target_delete');
  const likeButton = placeElement.querySelector('.button_target_like');

  placeElement.querySelector('.place__name').textContent = name;
  placeImage.setAttribute('src', link);
  placeImage.setAttribute('alt', name);

  if (likes.length > 0) {
    likes.forEach((el) => {
      if (userId === el._id) {
        likeButton.classList.toggle('button_target_like-active');
      }
    })
  }
  //-- Отрисовка количества лайков в зависимости от их кол-ва и количества знаков в числе со сдвигом елемента влево --//
  renderForCountLikes(countPlaceLikes, likes);

  //-- Удаление корзинки если не моя карточка --//
  if (userId === cardOwnerId) {
    //-- По клику на иконку корзинки удаляем карточку с местом --//
    deleteButton.addEventListener('click', (evt) => {
      deleteCard(cardId)
        .then(checkResponse, evt.target.closest('.place').remove())
        .catch((err) => {
          console.log(err);
        });
    });
  }
  else {
    deleteButton.style.display = 'none';
  }

  //-- По клику на картинку места открываем попап с развернутой картинкой места --//
  placeImage.addEventListener('click', (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageName.textContent = popupImage.alt;
    openPopup(popupForBigPicture);
  });

  //-- По клику на иконку сердечка ставим лайк или дизлайк --//
  likeButton.addEventListener('click', (evt) => {
    //-- Если мы никогда не ставили лайк карчке добавляем лайк --//
    if (!evt.target.className.includes('button_target_like-active')) {
      addLikesTocard(cardId)
        .then(checkResponse)
        //-- Если сервер вернул обновленную карточку --//
        .then((newCard) => {
          evt.target.classList.add('button_target_like-active');
          countPlaceLikes.classList.remove('place__count-like_unvisible');
          countPlaceLikes.textContent = newCard.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //-- Если пользователь ставил когда-то лайк --//
    else {
      removeLikesTocard(cardId)
        .then(checkResponse)
        //-- Если сервер вернул оновленную карточку --//
        .then((newCard) => {
          //-- Проверяем единственный ли был лайк на карточке --//
          if (newCard.likes.length === 0) {
            countPlaceLikes.classList.add('place__count-like_unvisible');
            evt.target.classList.remove('button_target_like-active');
          }
          //-- Если дизлайк наш то обновляем кол-во --//
          countPlaceLikes.textContent = newCard.likes.length;
          evt.target.classList.remove('button_target_like-active');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return placeElement;
}

//-- Экспорты --//
export { createCard };
