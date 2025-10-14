const numberInputText = document.getElementById("number-input");
const addNumberButton = document.getElementById("add-number");
const numbersListText = document.getElementById("numbers-list");
const numbers = [];
addNumberButton.addEventListener("click", () => {
    numbers.push(numberInputText.value);
    numbersListText.innerText = numbers.join(", ");
});
