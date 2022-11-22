// sum.test.js
// [Done]

// Sanity Test compiler
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// Import and Test the Sum Function
const sum = require('../code-to-unit-test/sum.js');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});