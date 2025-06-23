function romanToInt(s) {
    const dictionary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    const transformedToArray = s.split('');

    return transformedToArray.reduce((acc, el, idx) => {
        const next = transformedToArray[idx + 1];
        acc = dictionary[el] < dictionary[next] ? acc -= dictionary[el] : acc += dictionary[el]

        return acc;
    }, 0);
}

console.log('result', romanToInt('MCMXCIV'))