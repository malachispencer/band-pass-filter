const lowWaveDefault = 40;
const highWaveDefault = 1000;

function bandPassFilter(soundWave, lowThreshold = lowWaveDefault, highThreshold = highWaveDefault) {
  if (!soundWave.length) { throw 'No sound wave found'; }

  return soundWave.map(frequency => {
    return frequency < lowThreshold ? lowThreshold :
      frequency > highThreshold ? highThreshold :
        frequency;
  });
}

module.exports = bandPassFilter;