function runWithDelay(cb, delay = 3000) {
  setTimeout(() => {
    cb();
  }, delay);
}

module.exports = runWithDelay;
