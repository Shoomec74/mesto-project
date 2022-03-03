//-- Кнопки --//
const editBtn = document.querySelector('.button_target_edit-profile');
const addBtn = document.querySelector('.button_target_add-card');
const closedPopupBtn = document.querySelector('.button_target_closed');
const savePopupBtn = document.querySelector('.button_target_save');
//-- Модалки --//
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
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
const placeTemplate = document.querySelector('#place').content;
const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
const placeImage = placeElement.querySelector('.place__image');
//-- Контент карточек --//
const cardsContent = [
  { name: 'Екатеринбург', src: './images/ekaterinburg.webp' },
  { name: 'Евпатория', src: './images/evpatorya.webp' },
  { name: 'Магнитогорск', src: './images/magnitogorsk.webp' },
  { name: 'Москва', src: './images/moskow.webp' },
  { name: 'Уральское Бали', src: './images/ural-baly.webp' },
  { name: 'Сочи', src: './images/sochi.webp' }
];
//-- Инициализация карточек на страницу --//
function initialCards(array) {
  array.forEach(element => {
    places.append(createCard(element.name, element.src));
  });
}
//-- Обработка редактирования профиля --//
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  aboutUsername.textContent = aboutInput.value;
  closePopup(0);
}
//-- Обработка добавления карточки с местом --//
function formSubmitHandlerAddPlace(evt) {
  evt.preventDefault();
  places.prepend(createCard(placeInput.value, linkInput.value));
  cardsContent.unshift({name: placeInput.value, src: linkInput.value});
  placeInput.value = '';
  linkInput.value = '';
  closePopup(1);
}
//-- Создание карточки, возвращает готовую ноду для вставки на страницу --//
function createCard(name, link) {
  placeElement.querySelector('.place__name').textContent = name;
  placeImage.setAttribute('src', link);
  placeImage.setAttribute('alt', name);
  return placeElement.cloneNode(true);
}
//-- Открытие модального окна --//
function openPopup(indexPopup) {
  if (indexPopup === 0) {
    nameInput.value = username.textContent;
    aboutInput.value = aboutUsername.textContent;
  }
  popups[indexPopup].classList.add('popup_status_opened');
}
//-- Закрытие модального окна при submit формы--//
function closePopup(indexPopup) {
  popups[indexPopup].classList.remove('popup_status_opened');
}

initialCards(cardsContent);
formEditProfile.addEventListener('submit', (formSubmitHandler));
formAddplace.addEventListener('submit', (formSubmitHandlerAddPlace));
editBtn.addEventListener('click', () => openPopup(0));
addBtn.addEventListener('click', () => openPopup(1));
popups.forEach(el =>
  el.addEventListener('click', (evt) => {
    if (evt.target.className === 'button button_target_closed') {
      evt.target.closest('.popup').classList.remove('popup_status_opened');
    }
  }));
places.addEventListener('click', (evt) => {
  if (evt.target.className === 'button button_target_delete') {
    evt.target.parentElement.remove();
  }
  else if (evt.target.className === 'button button_target_like' || evt.target.className === 'button button_target_like button_target_like-active') {
    evt.target.classList.toggle('button_target_like-active');
  }
  else if (evt.target.className === 'place__image') {


  }
});
