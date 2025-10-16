const numberInputText = document.getElementById("number-input");
const addNumberButton = document.getElementById("add-number");
const numbersListText = document.getElementById("numbers-list");
const sortedNumbersListText = document.getElementById("sorted-numbers-list");
const numberCountText = document.getElementById("number-count");
const numbers = [];
addNumberButton.addEventListener("click", () => {
    numbers.push(numberInputText.value);
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    numbersListText.innerText = numbers.join(", ");
    sortedNumbersListText.innerText = sortedNumbers.join(", ");
    numberCountText.innerText = numbers.length;
});
