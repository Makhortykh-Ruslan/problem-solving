const page = 10;
const count = 10;

const array = Array.from({ length: 100 }, (_, i) => i + 1);

console.log('first', page * count);
console.log('second', (page + 1) * count);

const pageView = array.slice(page * count, (page + 1) * count);

console.log('pageView', pageView);
