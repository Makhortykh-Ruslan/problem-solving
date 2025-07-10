function findSubstring(source, substr) {
  for (let i = 0; i < source.length; i++) {
    const window = source.slice(i, i + substr.length);

    if (window === substr) {
      return window;
    }
  }

  return '';
}

module.exports = { findSubstring };
