function checkValidString(s) {
  let minOpen = 0;
  let maxOpen = 0;

  for (let char of s) {
    if (char === '(') {
      minOpen++;
      maxOpen++;
    } else if (char === ')') {
      minOpen--;
      maxOpen--;
    } else if (char === '*') {
      minOpen--;
      maxOpen++;
    }

    if (maxOpen < 0) return false;
    minOpen = Math.max(minOpen, 0);
  }

  return minOpen === 0;
}
