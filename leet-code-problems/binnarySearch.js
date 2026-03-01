function binarySearch(array, target) {
  const left = 0;
  const right = array.length;
  const mid = Math.floor((left + right) / 2);

  if (mid === target) {
    return mid;
  }
}

binarySearch([1, 2, 3, 4, 5]);
