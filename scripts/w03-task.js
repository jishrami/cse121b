/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2); 
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers (){
    let subNumber1 = Number(document.querySelector('#subtract1').value);

    let subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend1 = Number(document.querySelector('#dividend').value);
    let divisor1 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend1, divisor1);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function calculateTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    let isMember = document.getElementById('member').checked;

    let total;

    if (isMember) {
        total = subtotal - (subtotal * .15)
    } else {
        total = subtotal
    }

    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', calculateTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
const filterOdd = (array) => {
    return array.filter(number => number % 2 !== 0);
};

let oddNums = filterOdd(numbersArray);

document.getElementById('odds').innerHTML = oddNums.join(', ')

/* Output Evens Only Array */
const filterEven = (array) => {
    return array.filter(number => number % 2 == 0);
};

let evenNums = filterEven(numbersArray);

document.getElementById('evens').innerHTML = evenNums.join(', ');

/* Output Sum of Org. Array */

let arraySum = numbersArray.reduce((sum, number) => sum + number, 0);

document.getElementById('sumOfArray').innerHTML = arraySum;


/* Output Multiplied by 2 Array */

let arrayByTwo = numbersArray.map((number) => number * 2, 0);

document.getElementById('multiplied').innerHTML = arrayByTwo;

/* Output Sum of Multiplied by 2 Array */

let arrayByTwoSum = arrayByTwo.reduce((sum, number) => sum + number, 0)

document.getElementById('sumOfMultiplied').innerHTML = arrayByTwoSum;