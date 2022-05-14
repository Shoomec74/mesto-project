//-- Экспорты --//
export {
  profileEditButton, placeAddButton, popupSavedButton, popup, popups, popupForEditProfile,
  popupForAddPlace, popupForBigPicture, popupImage, popupImageName, username, aboutUsername, form, formEditProfile,
  formAddplace, nameInput, aboutInput, placeInput, linkInput, places, validationSettings, avatarEditButton,
  popupForEditAvatar, formEditAvatar, avatar, avatarInput, formError, popupError
};

//-- Кнопки --//
const profileEditButton = document.querySelector('.button_target_edit-profile');
const placeAddButton = document.querySelector('.button_target_add-card');
const popupSavedButton = document.querySelector('.button_target_save');
const avatarEditButton = document.querySelector('.button_target_edit-avatar');

//-- Модалки --//
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const popupForEditAvatar = document.querySelector('.popup_for_edit-avatar');
const popupForEditProfile = document.querySelector('.popup_for_edit-profile');
const popupForAddPlace = document.querySelector('.popup_for_add-place');
const popupForBigPicture = document.querySelector('.popup_for_big-picture');
const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');
const popupError = document.querySelector('.popup_for_error');

//-- Прочее --//
const username = document.querySelector('.profile__info-username');
const aboutUsername = document.querySelector('.profile__info-about-user');
const avatar = document.querySelector('.profile__avatar');

//-- Формы --//
const form = document.querySelector('.form');
const formEditProfile = document.querySelector('#form-edit-profile');
const formAddplace = document.querySelector('#form-add-place');
const formEditAvatar = document.querySelector('#form-edit-avatar');
const formError = document.querySelector('#form-error');
const nameInput = document.querySelector('.form__input-name');
const aboutInput = document.querySelector('.form__input-about');
const placeInput = document.querySelector('.form__input-place');
const linkInput = document.querySelector('.form__input-link');
const avatarInput = document.querySelector('.form__input-avatar');

//-- Карточки мест --//
const places = document.querySelector('.places__list');

/* //-- Пути до картинок --//
const ekaterinburg = new URL('../images/ekaterinburg.webp', import.meta.url);
const evpatoria = new URL('../images/evpatorya.webp', import.meta.url);
const magnitogorsk = new URL('../images/magnitogorsk.webp', import.meta.url);
const moscow = new URL('../images/moskow.webp', import.meta.url);
const uralBali = new URL('../images/ural-baly.webp', import.meta.url);
const sochi = new URL('../images/sochi.webp', import.meta.url);

//-- Контент карточек --//
const cardsContent = [
  { name: 'Екатеринбург', link: ekaterinburg },
  { name: 'Евпатория', link: evpatoria },
  { name: 'Магнитогорск', link: magnitogorsk },
  { name: 'Москва', link: moscow },
  { name: 'Уральское Бали', link: uralBali },
  { name: 'Сочи', link: sochi }
]; */

//-- Селекторы для валидации форм --//
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_target_save',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
