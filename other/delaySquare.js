function delaySquare(number, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number);
    }, delay);
  });
}

const numbers = [2, 3, 4];

const numbersPromise = numbers.map((el) => delaySquare(el, 2000));

const result = Promise.all([...numbersPromise]);

// result.then((el) => {
//   console.log('hello', el);
// });

async function allSettledSquares() {
  const numbers = [2, 3, 4];
  const promises = numbers.map((el) => delaySquare(el, 2000));
  return await Promise.allSettled(promises);
}

allSettledSquares().then((el) => console.log('hello', el));
