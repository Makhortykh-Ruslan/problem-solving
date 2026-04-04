function findIndexFirstOccurrence(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const transform = haystack.slice(i, needle.length);
    if (transform === needle) {
      return i;
    }
  }
  return -1;
}

// console.log('result', findIndexFirstOccurrence('leetcode', 'leeto'));
console.log('result', findIndexFirstOccurrence('sadbutsad', 'sad'));
// console.log('result', findIndexFirstOccurrence('abcabcabc', 'abc'));
