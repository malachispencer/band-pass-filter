const bandPassFilter = require('../src/bandPassFilter');

describe('bandPassFilter', () => {
  test('throws an error when not passed a frequency', () => {
    expect(() => { bandPassFilter([], 30, 90) }).toThrow('No sound wave found');
  });

  test('returns the same array when all frequencies are in range', () => {
    expect(bandPassFilter([30, 60, 90], 30, 90)).toEqual([30, 60, 90]);
  });
});