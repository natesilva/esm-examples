// Select 5 white balls
const whiteBalls = getLuckyNumbers(1, 69, 5);
const sortedWhiteBalls = [...whiteBalls].sort((a, b) => a - b);

// Select 1 red ball
const redBall = getLuckyNumbers(1, 26, 1)

const results = `${JSON.stringify([...sortedWhiteBalls])} ${JSON.stringify([...redBall])}`;
document.getElementById('results').innerText = results;
