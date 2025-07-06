/**  Input: "abbaca"
 Output: "ca"

 Пояснення:
 - "abbaca" → видаляємо "bb" → "aaca"
 - "aaca" → видаляємо "aa" → "ca"
  **/

function removeDuplicates(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }

    if (stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
}

module.exports = { removeDuplicates };
