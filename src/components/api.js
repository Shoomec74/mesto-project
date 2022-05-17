//-- Объект конфигурации JSON запросов --//
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: '90146057-36cb-4eda-a113-616a7fa7d2dd',
    'Content-Type': 'application/json'
  }
}

//-- Getter с сервера для получения массива с карточками --//
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse);
}

//-- Getter с сервера для получения объекта с профилем --//
const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse);
}

//-- Обновление на сервере информации о профиле, возвращает обновленный объект с профилем --//
const updateUserInfo = (username, aboutUsername) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: username,
      about: aboutUsername,
    })
  })
  .then(checkResponse);
}

//-- Обновление на сервере аватарки подльзователя, возвращает обновленный объект с аватаром --//
const updateAvatar = (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: url
    })
  })
  .then(checkResponse);
}

//-- Отправляет объект с новой карточкой, который добавил пользователь, получает добавленную карточку с сервера --//
const addcardtoServer = (cardName, urlImage) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: urlImage
    })
  })
  .then(checkResponse);
}

//-- Удаляем карточку с сервера, получает измененный массив с карточками --//
const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
}

//-- Добавялем объект текущего профиля в массив лайкнувших карточку --//
const addLikesTocard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(checkResponse)
}

//-- Удаляем объект текущего профиля в массив лайкнувших карточку --//
const removeLikesTocard = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
}
    return Promise.reject(`Ошибка ${res.status}`);
}

//-- Экспорты --//
export { getInitialCards, getUserInfo, updateUserInfo, updateAvatar, addcardtoServer,
  deleteCard, addLikesTocard, removeLikesTocard, checkResponse }
