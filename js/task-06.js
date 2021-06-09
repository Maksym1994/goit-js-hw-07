
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', controlOfValidation);

function controlOfValidation(event) {

  if (event.currentTarget.value.length !== Number(validationInput.dataset.length)) {
    validationInput.classList = 'invalid';
  } else {
    validationInput.classList = 'valid';
  }
    }