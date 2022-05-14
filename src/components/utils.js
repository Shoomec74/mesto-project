import { validationSettings, popupSavedButton } from "./data";
export { inactiveButtonAfterSubmit, renderForCountLikes, renderLoading };

const inactiveButtonAfterSubmit = (form) => {
  form.querySelector('.button_target_save').classList.add(validationSettings.inactiveButtonClass);
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

function renderLoading(isLoading, form) {
  const loading = 'Сохранение...';
  if (!isLoading) {
    form.querySelector('.button_target_save').classList.remove('button_loading');
    if(form.name === 'form-edit-profile') {
      form.querySelector('.button_target_save').textContent = 'Сохранить';
    }
    else if (form.name === 'form-edit-avatar') {
      form.querySelector('.button_target_save').textContent = 'Обновить';
    }
    else if (form.name === 'form-add-place') {
      form.querySelector('.button_target_save').textContent = 'Добавить';
    }
  }
  else {
    form.querySelector('.button_target_save').classList.add('button_loading');
    form.querySelector('.button_target_save').textContent = loading;
  }
}
