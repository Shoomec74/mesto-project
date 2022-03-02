//-- Кнопки --//
const editBtn = document.querySelector('.button_target_edit-profile');
const addBtn = document.querySelector('.button_target_add-card');
const closedPopupBtn = document.querySelector('.button_target_closed');
const savePopupBtn = document.querySelector('.button_target_save');
//-- Модалки --//
const popup = document.querySelector('.popup');
//-- Формы --//
const form = popup.querySelector('.form');
const nameInput = popup.querySelector('.form__item_type_name');
const aboutInput = popup.querySelector('.form__item_type_about');
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

function initialCards(array) {
  array.forEach(element => {
    places.append(createCard(element.name, element.src));
  });
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.value = username;
  aboutInput.value = aboutUsername;
}

function createCard(name, link) {
  placeElement.querySelector('.place__name').textContent = name;
  placeImage.setAttribute('src', link);
  placeImage.setAttribute('alt', name);
  return placeElement.cloneNode(true);
}

//const a = 'Miami';
//const b = 'https://i.pinimg.com/originals/14/85/7f/14857f89ac0b73330745414bb7b673df.jpg';
//places.prepend(createCard(a,b));

function openPopup() {
  popup.classList.add('popup_status_opened');
  nameInput.value = document.querySelector('.profile__info-username').textContent;
  aboutInput.value = document.querySelector('.profile__info-about-user').textContent;
}

function closePopup() {
  popup.classList.remove('popup_status_opened');
}

initialCards(cardsContent);

const likeBtn = document.querySelector('.button_target_like');
const deleteCardBtn = document.querySelector('.button_target_delete');

editBtn.addEventListener('click', (openPopup));
closedPopupBtn.addEventListener('click', (closePopup));

places.addEventListener('click', (evt) => {
  if (evt.target.className === 'button button_target_delete') {
    const listItem = deleteCardBtn.closest('.place');
    listItem.remove();
    console.log('if сработало УРА!');
  }
  else if (evt.target.className === 'button button_target_like') {
    likeBtn.classList.toggle('button_target_like-active')
    console.log('Ставлю лайк!');
  }
  console.log('Жмакаем НЕ по кнопке удалить');
});
