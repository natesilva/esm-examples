/**
 * Get some random lucky numbers.
 *
 * @param {number} min - The lowest number allowed
 * @param {number} max - The highest number allowed
 * @param {number} qty - How many lucky numbers to get
 *
 * @returns {Set} A Set of lucky numbers
 */
export function getLuckyNumbers(min, max, qty) {
  const results = new Set();

  while (results.size < qty) {
    const nextLuckyNumber = getRandomInt(min, max + 1);
    results.add(nextLuckyNumber);
  }
    
  return results;
}

/**
 * Get a random integer between min and max.
 *
 * @param {number} min - The lowest number allowed (inclusive)
 * @param {number} max - The highest number allowed (exclusive)
 *
 * @returns {number} A random integer >= min and < max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
