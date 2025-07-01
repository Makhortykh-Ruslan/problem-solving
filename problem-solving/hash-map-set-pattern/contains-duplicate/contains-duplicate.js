function containsDuplicate(arr) {
  const hash = new Set(arr);

  return hash.size !== arr.length;
}

module.exports = { containsDuplicate };
