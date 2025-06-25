const data = [
  { id: 1, category: 'fruit', name: 'apple' },
  { id: 2, category: 'fruit', name: 'banana' },
  { id: 3, category: 'vegetable', name: 'carrot' },
  { id: 4, category: 'fruit', name: 'grape' },
  { id: 5, category: 'vegetable', name: 'lettuce' },
];

function groupBy(arr, callBack) {
  if (typeof callBack !== 'function') {
    throw new Error('Argument is not function');
  }

  return arr.reduce((card, el) => {
    card[callBack(el)]
      ? (card[callBack(el)] = [...card[callBack(el)], el])
      : (card[callBack(el)] = [el]);

    return card;
  }, {});
}

const result = groupBy(data, (item) => item.category);

console.log('result', result);
