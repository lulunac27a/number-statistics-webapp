const numberInputText = document.getElementById("number-input"); //number input text
const addNumberButton = document.getElementById("add-number"); //add number button
const numbersListText = document.getElementById("numbers-list"); //numbers list text
const sortedNumbersListText = document.getElementById("sorted-numbers-list"); //sorted numbers list text
const numberCountText = document.getElementById("number-count"); //number count length text
const numbers = []; //numbers list
addNumberButton.addEventListener("click", () => {
    //when add number button is pressed
    numbers.push(parseFloat(numberInputText.value, 10)); //parse entered numeric value as floating point number
    const sortedNumbers = [...numbers].sort((a, b) => a - b); //sort numbers in ascending order
    numbersListText.innerText = numbers.join(", "); //update numbers list text
    sortedNumbersListText.innerText = sortedNumbers.join(", "); //update sorted numbers list text
    numberCountText.innerText = numbers.length; //update number count length text
});
