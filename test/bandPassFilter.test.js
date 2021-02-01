const bandPassFilter = require('../src/bandPassFilter');

describe('bandPassFilter', () => {
  test('throws an error when not passed a frequency', () => {
    expect(() => { bandPassFilter([], 30, 90) }).toThrow('No sound wave found');
  });

  test('returns the same array when all frequencies are in range', () => {
    expect(bandPassFilter([30, 60, 90], 30, 90)).toEqual([30, 60, 90]);
  });

  test('frequencies below low threshold become low threshold', () => {
    expect(bandPassFilter([30], 40, 90)).toEqual([40]);
    expect(bandPassFilter([30, 60, 90], 70, 100)).toEqual([70, 70, 90]);
  });

  test('frequencies above high threshold become high threshold', () => {
    expect(bandPassFilter([90], 30, 80)).toEqual([80]);
    expect(bandPassFilter([30, 60, 90], 30, 50)).toEqual([30, 50, 50]);
  });

  test('handles sound wave with frequencies above and below thresholds', () => {
    expect(bandPassFilter([60, 10, 45, 60, 1500], 40, 1000)).toEqual([60, 40, 45, 60, 1000]);
  });

  test('default low threshold is 40 and default high threshold is 1000', () => {
    expect(bandPassFilter([10, 500, 1001])).toEqual([40, 500, 1000]);
  });
});