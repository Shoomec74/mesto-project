//-- Кнопки --//
const profileEditButton = document.querySelector('.button_target_edit-profile');
const placeAddButton = document.querySelector('.button_target_add-card');
const popupSavedButton = document.querySelector('.button_target_save');

//-- Модалки --//
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const popupForEditProfile = document.querySelector('.popup_for_edit-profile');
const popupForAddPlace = document.querySelector('.popup_for_add-place');
const popupForBigPicture = document.querySelector('.popup_for_big-picture');
const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');
//-- Прочее --//
const username = document.querySelector('.profile__info-username');
const aboutUsername = document.querySelector('.profile__info-about-user');

//-- Формы --//
const form = document.querySelector('.form');
const formEditProfile = document.querySelector('#form-edit-profile');
const formAddplace = document.querySelector('#form-add-place');
const nameInput = document.querySelector('.form__item_type_name');
const aboutInput = document.querySelector('.form__item_type_about');
const placeInput = document.querySelector('.form__item_type_place');
const linkInput = document.querySelector('.form__item_type_link');

//-- Карточки мест --//
const places = document.querySelector('.places__list');

//-- Создание карточки, установка событий на каждый интерактивный элемент карточки,
//   возвращает готовую ноду для вставки на страницу --//
function createCard(name, link) {
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

//-- Инициализация карточек на страницу --//
function initialCards(cards, container) {
  cards.forEach(card => {
    container.append(createCard(card.name, card.src));
  });
}

//-- Обработка формы редактирования профиля --//
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  aboutUsername.textContent = aboutInput.value;
  closePopup(popupForEditProfile);
}

//-- Обработка формы добавления карточки с местом --//
function formSubmitHandlerAddPlace(evt) {
  evt.preventDefault();
  places.prepend(createCard(placeInput.value, linkInput.value));
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupForAddPlace);
}

//-- Открытие можального окна редактирования профиля с заполненными полями ввода--//
function openPopupEditProfile() {
  nameInput.value = username.textContent;
  aboutInput.value = aboutUsername.textContent;
  openPopup(popupForEditProfile);
}

//-- Открытие модального окна --//
function openPopup(namePopup) {
  namePopup.classList.add('popup_status_opened');
}

//-- Закрытие модального окна при submit формы --//
function closePopup(namePopup) {
  namePopup.classList.remove('popup_status_opened');
}

//-- Инициализируем места при загрузке страницы --//
initialCards(cardsContent, places);

//-- Сабмитим форму редактирования профиля --//
formEditProfile.addEventListener('submit', (formSubmitHandler));

//-- Сабмитим форму добавления места профиля --//
formAddplace.addEventListener('submit', (formSubmitHandlerAddPlace));

//-- Открываем модалку редактирвоания профиля --//
profileEditButton.addEventListener('click', (openPopupEditProfile));

//-- Открываем модалку добавления карточки с местом --//
placeAddButton.addEventListener('click', () => openPopup(popupForAddPlace));

//-- Отлавливаем клик на кнопке закрытия всех попапов --//
popups.forEach(el =>
  el.addEventListener('click', (evt) => {
    if (evt.target.className === 'button button_target_closed') {
      closePopup(el);
    }
  }));
