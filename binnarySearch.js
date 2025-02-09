function binarySearch(array, target) {
    let left = 0;
    let right = array.length;
    const mid = Math.floor((left + right) / 2);

    if (mid === target) {
        return mid;
    }
}

binarySearch([1, 2, 3, 4, 5])