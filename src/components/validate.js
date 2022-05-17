//-- Импорты --//
import { validationSettings } from "./data.js";

// Функция, которая показывает ошибку ввода в поле конкретной формы с параметрами форма, поле ввода, сообщение ошибки валидации
const showInputError = (form, formInput, validationMessage, settings) => {
  //Добавляем класс со стилями ошибки поля ввода
  formInput.classList.add(settings.inputErrorClass);
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = validationMessage;
  // Показываем сообщение об ошибке
  formError.classList.add(settings.errorClass);
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

const toggleButtonState = (inputList, buttonElement, settings) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
  }
};

// Функция, которая удаляет ошибку в поле ввода формы. параметры сама форма и поле ввода формы
const hideInputError = (form, formInput, settings) => {
  //Удаляем класс со стилями ошибки поля ввода
  formInput.classList.remove(settings.inputErrorClass);
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Очистим сообщение об ошибке
  formError.textContent = '';
  // Скрываем сообщение об ошибке
  formError.classList.remove(settings.errorClass);
};

// Функция, которая проверяет валидность поля
const isValid = (form, formInput, settings) => {
  if (!formInput.validity.valid) {
    // Если поле формы не проходит валидацию, покажем ошибку
    showInputError(form, formInput, formInput.validationMessage, settings);
  } else {
    // Если проходит, скроем
    hideInputError(form, formInput, settings);
  }
};

const setEventListeners = (form, settings) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const button = form.querySelector(settings.submitButtonSelector);
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, button, settings);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((input) => {
    // каждому полю добавим обработчик события input
    input.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(form, input, settings);
      toggleButtonState(inputList, button, settings);
    });
  });
};

const enableValidation = (settings) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  // Переберём полученную коллекцию
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(form, settings);
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
