const numberInputText = document.getElementById("number-input");
const addNumberButton = document.getElementById("add-number");
const numbers = [];
addNumberButton.addEventListener("click", () => {
  numbers.push(numberInputText.value);
});
