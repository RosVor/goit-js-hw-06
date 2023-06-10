const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value.trim();
  const expectedLength = Number(validationInput.dataset.length);

  if (enteredValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
