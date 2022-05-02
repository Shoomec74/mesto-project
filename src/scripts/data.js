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

//-- Контент карточек --//
const ekaterinburg = new URL('../images/ekaterinburg.webp', import.meta.url);
const evpatoria = new URL('../images/evpatorya.webp', import.meta.url);
const magnitogorsk = new URL('../images/magnitogorsk.webp', import.meta.url);
const moscow = new URL('../images/moskow.webp', import.meta.url);
const uralBali = new URL('../images/ural-baly.webp', import.meta.url);
const sochi = new URL('../images/sochi.webp', import.meta.url);

const cardsContent = [
  { name: 'Екатеринбург', src: ekaterinburg },
  { name: 'Евпатория', src: evpatoria },
  { name: 'Магнитогорск', src: magnitogorsk },
  { name: 'Москва', src: '../images/moskow.webp' },
  { name: 'Уральское Бали', src: "<%=require('../images/ural-baly.webp')%>" },
  { name: 'Сочи', src: "<%=require('../images/sochi.webp')%>" }
];

export {profileEditButton, placeAddButton, popupSavedButton, popup, popups, popupForEditProfile,
  popupForAddPlace, popupForBigPicture, popupImage, popupImageName, username, aboutUsername, form, formEditProfile,
  formAddplace, nameInput, aboutInput, placeInput, linkInput, places, cardsContent};
