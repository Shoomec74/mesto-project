// Функция, которая показывает ошибку ввода в поле конкретной формы с параметрами форма, поле ввода, сообщение ошибки валидации
const showInputError = (form, formInput, validationMessage) => {
  //Добавляем класс со стилями ошибки поля ввода
  formInput.classList.add('form__input_type_error');
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = validationMessage;
  // Показываем сообщение об ошибке
  formError.classList.add('form__input-error_active');
};

// Функция, которая удаляет ошибку в поле ввода формы. параметры сама форма и поле ввода формы
const hideInputError = (form, formInput) => {
  //Удаляем класс со стилями ошибки поля ввода
  formInput.classList.remove('form__input_type_error');
  // Выбираем элемент ошибки на основе уникального класса
  const formError = form.querySelector(`.${formInput.id}-error`);
  // Очистим сообщение об ошибке
  formError.textContent = '';
  // Скрываем сообщение об ошибке
  formError.classList.remove('form__input-error_active');
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
  const inputList = Array.from(form.querySelectorAll('.form__input'));
  // Обойдём все элементы полученной коллекции
  inputList.forEach((input) => {
    // каждому полю добавим обработчик события input
    input.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(form, input);
    });
  });
};

export const enableValidation = (object) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('object.formSelector'));
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
