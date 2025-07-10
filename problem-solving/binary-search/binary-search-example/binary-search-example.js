const binarySearchExample = (array = [], k) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (array[mid] === k) {
      return mid;
    } else if (array[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = { binarySearchExample };
