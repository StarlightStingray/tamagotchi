/*---- constants ----*/

const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = '';
const TEEN_IMAGE = '';
const ADULT_IMAGE = '';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 5;
const MAX_CHILD_AGE = 5;
const MAX_TEEN_AGE = 19;
const HUNGER_INTERVAL = 2000;
const SLEEP_INTERVAL = 3000;
const BOREDOM_INTERVAL = 4000;
const AGE_INTERVAL = 5000;
const HYGIENE_INTERVAL = 1000;

/*---- app's state (variables) ----*/

let age;
let hunger;
let boredom;
let exhaustion;
let hygiene;

// don't do this;
// it might cause bugs if you calculate state values from other state values
// let gameOver = hunger > MAX_STAT_VALUE;

/*---- cached element references ----*/

/*---- event listeneres ----*/

/*---- functions ----*/






/*-------------------------*/

//Key Points & Best Practices
//Use constants instead of literal values to improve code readability and maintenance. For example, let's say you wanted to limit the number of guesses in a game to a certain number.
//You could write code like this:
let lose = numGuesses > 5;
// However, code like the following which would be more maintainable because you probably will need to use the maximum guesses value in more than one section of code:
let lose = numGuesses > MAX_GUESSES;
// Instead of using several separate variables to hold state, consider using object properties when it makes sense to do so. For example, if you need to track info for two players, instead of using several variables like player1name, player2name, player1score, player2score, etc., consider using an object like:
const players = {
	1: {
		name: '',
		score: 0,
	},
	'-1': {
		name: '',
		score: 0,
	},
};
// Following this practice will result in more concise code and make it easier to implement certain features such as persisting the state of a game.

// Don't store state data that can be computed as needed from other data - this avoids the risk of data becoming out of sync or inconsistent. For example, in Tic-Tac-Toe, it's not necessary to track the number of moves to determine if there's a tie game - the variable used to track the state of the board can already provide this info.

// If your code needs to access a DOM element more than once during runtime - cache it (save it in a variable).

// The render() function's responsibility is to transfer all state to the DOM. This includes the hiding/showing of parts of the UI based upon the application's state. For example, when a hand is in play in a game of Blackjack, the render() function would show the hit/stand buttons and hide the betting-related buttons. Also, if the render() function becomes too large, you can break it up into smaller functions, e.g., renderScores(),

// The overreaching principle to keep in mind is...
    //In response to user interaction:
        // Update all state impacted by the interaction, then
        // Update the DOM by calling render().