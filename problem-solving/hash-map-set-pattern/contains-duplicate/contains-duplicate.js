function containsDuplicate(arr) {
  const hash = new Set(arr);

  return hash.size !== arr.length;
}

console.log('containsDublicate', containsDuplicate([1, 2, 3, 4]));
