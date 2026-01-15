function groupBy(array, criterion) {
  return array.reduce((acc, el) => {
    const key = typeof criterion === 'function' ? criterion(el) : el[criterion];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(el);

    return acc;
  }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// Результат: { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy(['one', 'two', 'three'], 'length'));
// Результат: { '3': ['one', 'two'], '5': ['three'] }
