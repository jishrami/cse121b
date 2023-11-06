/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Josh Ramirez";
let currentYear = '2023';
let profilePicture = 'images/me-in-costume.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ( 'src', profilePicture);
imageElement.setAttribute ('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let foods = ["spaghetti", "Taco Bell", "hot dogs", "ice cream"];
foodElement.innerHTML = foods;
let newFood = "chocolate milk";

foods.push(newFood);

foodElement.innerHTML += `<br>${foods}`;

foods.shift();

foodElement.innerHTML += `<br>${foods}`;

foods.pop();

foodElement.innerHTML += `<br>${foods}`;