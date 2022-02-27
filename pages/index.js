//-- Кнопки --//
const editBtn = document.querySelector('.button_target_edit-profile');
const addBtn = document.querySelector('.button_target_add-card');
const closedPopupBtn = document.querySelector('.button_target_closed');
const savePopupBtn = document.querySelector('.button_target_save');
const likeBtn = document.querySelector('.button_target_like');

//-- Модалки --//
const popup = document.querySelector('.popup');

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

function createCard () {

}

function initialCards(arr) {
  cardsContent.forEach(element => {
    placeElement.querySelector('.place__name').textContent = element.name;
    placeImage.setAttribute('src', element.src);
    placeImage.setAttribute('alt', element.name);
    places.append(placeElement.cloneNode(true));
  });
}

function openPopup() {
  popup.classList.add('popup_status_opened');
}

function closePopup() {
  popup.classList.remove('popup_status_opened');
}

editBtn.addEventListener('click', (openPopup));
closedPopupBtn.addEventListener('click', (closePopup));

initialCards(cardsContent);
