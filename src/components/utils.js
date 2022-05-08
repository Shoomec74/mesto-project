import { validationSettings } from "./data";
export {inactiveButtonAfterSubmit};

const inactiveButtonAfterSubmit = (form) => {
  form.querySelector('.button_target_save').classList.add(validationSettings.inactiveButtonClass);
}
