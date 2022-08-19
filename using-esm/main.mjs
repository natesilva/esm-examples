// Using native ESM import

// To run this: node main.mjs

import { getLuckyNumbers } from './get-lucky-numbers.mjs';

// Select 5 white balls
const whiteBalls = getLuckyNumbers(1, 69, 5);
const sortedWhiteBalls = [...whiteBalls].sort((a, b) => a - b);

// Select 1 red ball
const redBall = getLuckyNumbers(1, 26, 1)

console.log('Your Powerball® numbers are:', sortedWhiteBalls, [...redBall]);
