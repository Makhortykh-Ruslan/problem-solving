function largestAltitude(gain) {
  let leftSum = 0;
  let maxHeight = 0;

  for (let i = 0; i < gain.length; i++) {
    leftSum = gain[i] + leftSum;
    maxHeight = Math.max(maxHeight, leftSum);
  }

  return maxHeight;
}

module.exports = { largestAltitude };
