const multiply = require('./multiply');

describe('multiply', () => {
  it('returns 30 when it multiplies 5 and 6', () => {
    expect(multiply(5, 6)).toBe(30);
  });

  it('returns 0 when it multiplies 5 and 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
