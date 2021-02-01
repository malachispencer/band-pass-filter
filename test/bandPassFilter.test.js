const bandPassFilter = require('../src/bandPassFilter');

describe('bandPassFilter', () => {
  test('throws an error when not passed a frequency', () => {
    expect(() => { bandPassFilter([], 30, 90) }).toThrow('No sound wave found');
  });

  test('returns the same array when all frequencies are in range', () => {
    expect(bandPassFilter([30, 60, 90], 30, 90)).toEqual([30, 60, 90]);
  });

  test('values below low threshold become low threshold', () => {
    expect(bandPassFilter([30], 40, 90)).toEqual([40]);
    expect(bandPassFilter([30, 60, 90], 70, 100)).toEqual([70, 70, 90]);
  });

  test('values above high threshold become high threshold', () => {
    expect(bandPassFilter([90], 30, 80)).toEqual([80]);
    expect(bandPassFilter([30, 60, 90], 30, 50)).toEqual([30, 50, 50]);
  });
});