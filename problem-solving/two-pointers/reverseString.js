/** 🧩 Two Pointers — задача 2: Reverse String (in-place)
 📌 Умова:
 Дано масив символів s, потрібно розвернути його в місці (in-place), тобто без створення нових масивів.

 reverseString(['h','e','l','l','o']) → ['o','l','l','e','h']
 reverseString(['H','a','n','n','a','h']) → ['h','a','n','n','a','H']


 **/

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
}

console.log(
  'Output ["o","l","l","e","h"]',
  reverseString(['h', 'e', 'l', 'l', 'o'])
);
/**
 Input: s = ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]

 **/

console.log(
  'Output ["h","a","n","n","a","H"]',
  reverseString(['H', 'a', 'n', 'n', 'a', 'h'])
);
/**
 Input: s = ['H', 'a', 'n', 'n', 'a', 'h']
 Output: ["h","a","n","n","a","H"]

 **/

csdcsd;
