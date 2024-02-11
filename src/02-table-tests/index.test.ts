import { Action, simpleCalculator } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 8, b: 3, action: Action.Subtract, expected: 5 },
  { a: 10, b: 2, action: Action.Subtract, expected: 8 },

  { a: 6, b: 3, action: Action.Multiply, expected: 18 },
  { a: 4, b: 5, action: Action.Multiply, expected: 20 },
  { a: 7, b: 2, action: Action.Multiply, expected: 14 },

  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 16, b: 4, action: Action.Divide, expected: 4 },
  { a: 25, b: 5, action: Action.Divide, expected: 5 },

  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`should return ${expected} for ${a} ${action} ${b}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});
