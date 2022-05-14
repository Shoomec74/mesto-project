//-- Импорты --//
import { openPopup } from './modal';
import { popupForBigPicture, popupImage, popupImageName } from './data.js';
import { renderForCountLikes } from './utils.js';
import { getUserInfo, deleteCard, addLikesTocard, removeLikesTocard } from './api.js';
//-- Экспорты --//
export { createCard };

//-- Создание карточки, установка событий на каждый интерактивный элемент карточки,
//   возвращает готовую ноду для вставки на страницу --//
const createCard = (name, link, likes, userId, cardId) => {
  const placeTemplate = document.querySelector('#place').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');
  const countPlaceLikes = placeElement.querySelector('.place__count-like');
  placeElement.querySelector('.place__name').textContent = name;
  placeImage.setAttribute('src', link);
  placeImage.setAttribute('alt', name);
  //-- Отрисовка количества лайков в зависимости от их кол-ва и количества знаков в числе со сдвигом елемента влево --//
  renderForCountLikes(countPlaceLikes, likes);
  //-- Удаление корзинки если не моя карточка --//
  getUserInfo()
    .then((responseUserInfo) => {
      if (responseUserInfo._id === userId) {
        //-- По клику на иконку корзинки удаляем карточку с местом --//
        placeElement.querySelector('.button_target_delete').addEventListener('click', (evt) => {
          deleteCard(cardId)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .catch((err) => {
            console.log(err);
          });
          evt.target.closest('.place').remove();
        });
      }
      else {
        placeElement.querySelector('.button_target_delete').style.display = 'none';
      }
    })
    .catch((err) => {
      console.log(err);
    });

    if (likes.length > 0) {
      getUserInfo()
      .then((responseUserInfo) => {
        likes.forEach((el) => {
          if (responseUserInfo._id === el._id) {
            placeElement.querySelector('.button_target_like').classList.toggle('button_target_like-active');
          }
        })
      })
    }

  //-- По клику на картинку места открываем попап с развернутой картинкой места --//
  placeElement.querySelector('.place__image').addEventListener('click', (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageName.textContent = popupImage.alt;
    openPopup(popupForBigPicture);
  });

  //-- По клику на иконку сердечка ставим лайк или дизлайк --//
  placeElement.querySelector('.button_target_like').addEventListener('click', (evt) => {
    //-- Если мы никогда не ставили лайк карчке добавляем лайк --//
    if(!evt.target.className.includes('button_target_like-active')) {
      addLikesTocard(cardId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
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


