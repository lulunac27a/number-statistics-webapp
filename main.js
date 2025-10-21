const numberInputText = document.getElementById("number-input"); //number input text
const addNumberButton = document.getElementById("add-number"); //add number button
const numbersListText = document.getElementById("numbers-list"); //numbers list text
const sortedNumbersListText = document.getElementById("sorted-numbers-list"); //sorted numbers list text
const numberCountText = document.getElementById("number-count"); //number count length text
const minimumText = document.getElementById("minimum-text"); //minimum number text
const maximumText = document.getElementById("maximum-text"); //maximum number text
const meanText = document.getElementById("mean-text"); //mean (average) number text
const numbers = []; //numbers list
addNumberButton.addEventListener("click", () => {
    //when add number button is pressed
    numbers.push(parseFloat(numberInputText.value, 10) || 0); //parse entered numeric value as floating point number
    const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0); //get sum of all numbers in array list
    const average = sum / numbers.length; //get average of all numbers in array list
    const sortedNumbers = [...numbers].sort((a, b) => a - b); //sort numbers in ascending order
    numbersListText.innerText = numbers.join(", "); //update numbers list text
    sortedNumbersListText.innerText = sortedNumbers.join(", "); //update sorted numbers list text
    numberCountText.innerText = numbers.length; //update number count length text
    minimumText.innerText = Math.min(...numbers); //update minimum text
    maximumText.innerText = Math.max(...numbers); //update maximum text
    meanText.innerText = average; //update mean (average) text
});
