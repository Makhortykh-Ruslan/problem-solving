/**  🧩 Two Pointers — задача 4: Valid Palindrome (з фільтром символів)
 📌 Умова:
 Перевірити, чи є рядок паліндромом, ігноруючи:

 пробіли

 розділові знаки

 isPalindrome("A man, a plan, a canal: Panama") → true
 isPalindrome("race a car") → false


 **/

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
  }

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
/**
 Input:  "A man, a plan, a canal: Panama"
 Output: true

 **/

console.log(isPalindrome('race a car'));
/**
 Input:  "race a car"
 Output: false

 **/
