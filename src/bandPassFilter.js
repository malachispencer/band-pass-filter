function bandPassFilter(soundWave, lowThreshold, highThreshold) {
  if (!soundWave.length) { throw 'No sound wave found'; }

  return soundWave.map(frequency => {
    return frequency;
  });
}

module.exports = bandPassFilter;