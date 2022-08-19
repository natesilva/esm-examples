import crypto from 'node:crypto';

/**
 * Get some random lucky numbers.
 *
 * @param {number} min - The lowest number allowed
 * @param {number} max - The highest number allowed
 * @param {number} qty - How many lucky numbers to get
 *
 * @returns {Set} A Set of lucky numbers
 */
export function getLuckyNumbers(min: number, max:number, qty: number) {
  const results = new Set<number>();

  while (results.size < qty) {
    const nextLuckyNumber = crypto.randomInt(min, max);
    results.add(nextLuckyNumber);
  }
    
  return results;
}
