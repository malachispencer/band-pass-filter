const bandPassFilter = require('../src/bandPassFilter');

describe('bandPassFilter', () => {
  test('throws an error when not passed a frequency', () => {
    expect(() => { bandPassFilter([], 30, 90) }).toThrow('No sound wave found');
  });
});