const crypto = require('crypto');

/**
 * Get some random lucky numbers.
 *
 * @param {number} min - The lowest number allowed
 * @param {number} max - The highest number allowed
 * @param {number} qty - How many lucky numbers to get
 *
 * @returns {Set} A Set of lucky numbers
 */
exports.getLuckyNumbers = function(min, max, qty) {
  const results = new Set();

  while (results.size < qty) {
    const nextLuckyNumber = crypto.randomInt(min, max);
    results.add(nextLuckyNumber);
  }
    
  return results;
}
