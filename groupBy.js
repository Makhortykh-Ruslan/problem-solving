const data = [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 2, category: 'fruit', name: 'banana' },
    { id: 3, category: 'vegetable', name: 'carrot' },
    { id: 4, category: 'fruit', name: 'grape' },
    { id: 5, category: 'vegetable', name: 'lettuce' },
];

function groupBy(arr, callBack) {
    const obj = {}

    if (typeof callBack !== "function") {
        throw new Error('Argument is not function');
    }

    arr.forEach((el) => obj[callBack(el)] ?  obj[callBack(el)] = [... obj[callBack(el)], el] : obj[callBack(el)] = [el])

    return obj;

}

const result = groupBy(data, (item) => item.category);

console.log(result);
