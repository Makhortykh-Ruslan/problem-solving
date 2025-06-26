function checkIfPalindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

function validPalindromeTwo(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      if (
        checkIfPalindrome(str, left + 1, right) ||
        checkIfPalindrome(str, left, right - 1)
      ) {
        return true;
      }

      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = { validPalindromeTwo };
