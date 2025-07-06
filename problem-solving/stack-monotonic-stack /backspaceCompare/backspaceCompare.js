/**
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * // s → "ac", t → "ac"
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 *
 * **/

function backspaceCompare(s, t) {
  const space = '#';

  const resultStrLength = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === space) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }

    return stack.join('');
  };

  return resultStrLength(s) === resultStrLength(t);
}

module.exports = { backspaceCompare };
