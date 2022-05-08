import { validationSettings } from "./data";
export {inactiveButtonBeforeSubmit};

const inactiveButtonBeforeSubmit = (submitFormButton) => {
  submitFormButton.querySelector('.button_target_save').classList.add(validationSettings.inactiveButtonClass);
}
