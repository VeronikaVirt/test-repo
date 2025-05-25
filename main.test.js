import { multiply, sumDigits } from './main.js';

test('multiply 2 * 3 = 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('sumDigits 2 + 3 = 5', () => {
  expect(sumDigits(2, 3)).toBe(5);
});
