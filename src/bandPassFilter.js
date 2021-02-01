function bandPassFilter(soundWave, lowThreshold, highThreshold) {
  if (!soundWave.length) { throw 'No sound wave found'; }

  return soundWave.map(frequency => {
    if (frequency < lowThreshold) {
      return lowThreshold;
    } else if (frequency > highThreshold) {
      return highThreshold;
    } else {
      return frequency;
    }
  });
}

module.exports = bandPassFilter;