function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const hashMap = new Map();

  for (const char of s) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!hashMap.has(char)) return false;
    hashMap.set(char, hashMap.get(char) - 1);
    if (hashMap.get(char) < 0) return false;
  }

  return true;
}

console.log('isAnagram', isAnagram('anagram', 'nagaram'));
