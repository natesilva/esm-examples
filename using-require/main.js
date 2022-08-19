// Using traditional Node.js require()

// To run this: node main.js

const { getLuckyNumbers } = require('./get-lucky-numbers');

// Select 5 white balls
const whiteBalls = getLuckyNumbers(1, 69, 5);
const sortedWhiteBalls = [...whiteBalls].sort((a, b) => a - b);

// Select 1 red ball
const redBall = getLuckyNumbers(1, 26, 1)

console.log('Your Powerball® numbers are:', sortedWhiteBalls, [...redBall]);
