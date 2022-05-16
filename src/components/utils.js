import { validationSettings } from "./data";

const inactiveButtonAfterSubmit = (form) => {
  const submitButton = form.querySelector('.button_target_save');
  if (!submitButton.hasAttribute('disabled')) {
    submitButton.classList.add(validationSettings.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  }
  else {
    submitButton.classList.remove(validationSettings.inactiveButtonClass);
    submitButton.removeAttibute('disabled');
  }
}

//-- Отрисовка количества лайков в зависимости от их кол-ва и количества знаков в числе со сдвигом влево --//
function renderForCountLikes(countLikeElement, likes) {
  let left = 57;
  if (likes === undefined) {
    return;
  }
  else if (likes.length !== 0) {
    switch (likes.length.toString().length) {
      case 2:
        countLikeElement.textContent = likes.length;
        left -= 4;
        countLikeElement.style.left = `${left}px`;
        break;
      case 3:
        countLikeElement.textContent = likes.length;
        left -= 8;
        countLikeElement.style.left = `${left}px`;
        break;
      case 4:
        countLikeElement.textContent = likes.length;
        left -= 12;
        countLikeElement.style.left = `${left}px`;
        break;
      default:
        countLikeElement.textContent = likes.length;
        break;
    }
  }
  else if (likes.length === 0) {
    countLikeElement.classList.add('place__count-like_unvisible');
  }
  countLikeElement.textContent = likes.length;
}

//-- Добавление и удаление стилей для анимации загрузки пока загружаются дагные с сервера --//
function renderLoading(isLoading, form, defaultButtonText) {
  const submitButton = form.querySelector('.button_target_save');
  if (!isLoading) {
    submitButton.classList.remove('button_loading');
    submitButton.textContent = defaultButtonText;
  }
  else {
    submitButton.classList.add('button_loading');
    submitButton.textContent = '';
  }
}

export { inactiveButtonAfterSubmit, renderForCountLikes, renderLoading };
