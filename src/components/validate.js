//-- Импорты --//
import { validationSettings } from "./data.js";

// Функция, которая показывает ошибку ввода в поле конкретной формы с параметрами форма, поле ввода, сообщение ошибки валидации
const showInputError = (form, formInput, validationMessage) => {
  //Добавляем класс со стилями ошибки поля ввода
  formInput.classList.add(validationSettings.inputErrorClass);
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = validationMessage;
  // Показываем сообщение об ошибке
  formError.classList.add(validationSettings.errorClass);
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
  }
};

// Функция, которая удаляет ошибку в поле ввода формы. параметры сама форма и поле ввода формы
const hideInputError = (form, formInput) => {
  //Удаляем класс со стилями ошибки поля ввода
  formInput.classList.remove(validationSettings.inputErrorClass);
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Очистим сообщение об ошибке
  formError.textContent = '';
  // Скрываем сообщение об ошибке
  formError.classList.remove(validationSettings.errorClass);
};

// Функция, которая проверяет валидность поля
const isValid = (form, formInput) => {
  if (!formInput.validity.valid) {
    // Если поле формы не проходит валидацию, покажем ошибку
    showInputError(form, formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(form, formInput);
  }
};

const setEventListeners = (form) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(form.querySelectorAll(validationSettings.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const button = form.querySelector(validationSettings.submitButtonSelector);
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, button);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((input) => {
    // каждому полю добавим обработчик события input
    input.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(form, input);
      toggleButtonState(inputList, button);
    });
  });
};

const enableValidation = (object) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  // Переберём полученную коллекцию
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(form);
  });
};

//-- После закрытия модального окна на крестик ресетим инпуты и стили валидации
const resetInputsAndErrors = (closingPopup) => {
  if (!closingPopup.className.includes('popup_for_big-picture')) {
    closingPopup.querySelector('.form').reset();
    const errorsList = closingPopup.querySelectorAll('.form__input-error');
    errorsList.forEach(errorMessage => {
      errorMessage.textContent = '';
      errorMessage.classList.remove(validationSettings.errorClass);
    });
    const inputsForm = closingPopup.querySelectorAll(validationSettings.inputSelector);
    inputsForm.forEach(input => {
      input.classList.remove(validationSettings.inputErrorClass);
    });
  }
}

//-- Экспорты --//
export { enableValidation, resetInputsAndErrors };
