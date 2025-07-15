function firstUniqChar(s) {
  let hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashMap.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log("firstUniqChar('leetcode')", firstUniqChar('leetcode'));
