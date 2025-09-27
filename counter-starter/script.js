const add = (step) => {
// We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
// We can use the innerText property to get the text inside the element
let number = numberElement.innerText;
number = parseInt(number) + step;
numberElement.innerText = number;
};

const subtract = (step) => {
// We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
// We can use the innerText property to get the text inside the element
let number = numberElement.innerText;
number = parseInt(number) - step;
numberElement.innerText = number;
};

const reset = (step) => {
// We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
// We can use the innerText property to get the text inside the element
let number = numberElement.innerText;
number = parseInt(0)
numberElement.innerText = number;
};

