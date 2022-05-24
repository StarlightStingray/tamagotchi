/*----- constants -----*/
const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = './assets/child.webp';
const TEEN_IMAGE = './assets/teen.webp';
const ADULT_IMAGE = './assets/adult.webp';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 5;
const MAX_CHILD_AGE = 12;
const MAX_TEEN_AGE = 19;
const HUNGER_INTERVAL = 2000;
const SLEEP_INTERVAL = 3000;
const BOREDOM_INTERVAL = 4000;
const AGE_INTERVAL = 1000;

/*----- app's state (variables) -----*/
let age;
let hunger;
let boredom;
let sleepiness;
// don't do this:
// it might cause bugs if you calculate state values from other state values
// let gameOver = hunger > MAX_STAT

/*----- cached element references -----*/
const playBtnEl = document.querySelector('#js-play-btn');
const welcomeModalEl = document.querySelector('.modal-welcome');
const tamagotchiContainerEl = document.querySelector('.tamagotchi-container');
const ageEl = document.querySelector('#js-age');
const petImg = document.createElement('img');

/*----- event listeners -----*/
playBtnEl.addEventListener('click', init);

/*----- functions -----*/
function init() {
	console.log('you clicked me');
	// hide begin game modal
	welcomeModalEl.classList.add('hide');
	// Initialize pet's age at 0
	age = 0;
	// Initialize pet's other stats at 0 (hunger, sleepiness, boredom)
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
	// Create egg element
	initEgg();
	// Start age timer
	handleAgeInterval();
}

function initEgg() {
	// create an egg div
	const egg = document.createElement('div');
	// give it an egg class
	egg.setAttribute('class', 'egg');
	// create a spots div
	const spots = document.createElement('div');
	// give it a spots class
	spots.setAttribute('class', 'spots');
	// append the spots div to the egg div
	egg.appendChild(spots);
	// append the egg div to the tamagotchi-container
	tamagotchiContainerEl.append(egg);
}

function handleAgeInterval() {
	// Create the img element where our pet img is going to be
	const ageTimer = setInterval(function () {
		// update the state age data
		age++;
		// update the dom with the new age data
		ageEl.innerText = age;
		renderPet();
	}, AGE_INTERVAL);
}

function renderPet() {
	if (age === 1) {
		// Clear egg from the tamagotchi container
		tamagotchiContainerEl.innerHTML = '';
		// Give it the src attribute for the age appropriate img
		petImg.setAttribute('src', BABY_IMAGE);
		// Append it to the tamagotchi container element
		tamagotchiContainerEl.appendChild(petImg);
	} else if (age <= MAX_BABY_AGE) {
		// // - If age is 1-5, show baby image
		// // Clear egg from the tamagotchi container
		// tamagotchiContainerEl.innerHTML = '';
		// // Give it the src attribute for the age appropriate img
		// petImg.setAttribute('src', BABY_IMAGE);
		// // Append it to the tamagotchi container element
		// tamagotchiContainerEl.appendChild(petImg);
		return;
	} else if (age <= MAX_CHILD_AGE) {
		// - If age is 6-12, show child image
		// Give it the src attribute for the age appropriate img
		petImg.setAttribute('src', CHILD_IMAGE);
	} else if (age <= MAX_TEEN_AGE) {
		// - If age is 13-19, show teen image
		petImg.setAttribute('src', TEEN_IMAGE);
	} else {
		// - If age is >19, show adult image
		petImg.setAttribute('src', ADULT_IMAGE);
	}
}

/*-------------------------*/

//Key Points & Best Practices
//Use constants instead of literal values to improve code readability and maintenance. For example, let's say you wanted to limit the number of guesses in a game to a certain number.
//You could write code like this:
// let lose = numGuesses > 5;
// However, code like the following which would be more maintainable because you probably will need to use the maximum guesses value in more than one section of code:

//// let lose = numGuesses > MAX_GUESSES;

// Instead of using several separate variables to hold state, consider using object properties when it makes sense to do so. For example, if you need to track info for two players, instead of using several variables like player1name, player2name, player1score, player2score, etc., consider using an object like:

// const players = {
//// 	1: {
//// 		name: '',
//// 		score: 0,
//// 	},
//// 	'-1': {
//// 		name: '',
//// 		score: 0,
//// 	},
//// };

// Following this practice will result in more concise code and make it easier to implement certain features such as persisting the state of a game.

// Don't store state data that can be computed as needed from other data - this avoids the risk of data becoming out of sync or inconsistent. For example, in Tic-Tac-Toe, it's not necessary to track the number of moves to determine if there's a tie game - the variable used to track the state of the board can already provide this info.

// If your code needs to access a DOM element more than once during runtime - cache it (save it in a variable).

// The render() function's responsibility is to transfer all state to the DOM. This includes the hiding/showing of parts of the UI based upon the application's state. For example, when a hand is in play in a game of Blackjack, the render() function would show the hit/stand buttons and hide the betting-related buttons. Also, if the render() function becomes too large, you can break it up into smaller functions, e.g., renderScores(),

// The overreaching principle to keep in mind is...
//In response to user interaction:
// Update all state impacted by the interaction, then
// Update the DOM by calling render().
