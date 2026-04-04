function isUnique(nums) {
  return new Set([...nums]).size === nums.length;
}

console.log('result', isUnique([1, 2, 3, 4]));
