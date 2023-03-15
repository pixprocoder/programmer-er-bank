function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

function getTextValue(textId) {
  const textElement = document.getElementById(textId);
  const textValue = parseInt(textElement.innerText);
  return textValue;
}

function setAmountValue(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = parseFloat(newValue);
}
