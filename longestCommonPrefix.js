function longestCommonPrefix(words) {
    const firstWord = words[0];
    let result = ''

    for (let i = 0; i < firstWord.length; i++) {
        for (let k = 0; k < words.length; k++) {
            if (words[k][i] !== firstWord[i]) {
                return result;
            }
        }
        result += firstWord[i];
    }

    return result;
}

function longestCommonPrefixSort(words) {
    const sortedData = words.sort();
    const firstWord = sortedData[0];
    const lastWord = sortedData[sortedData.length - 1];

    let i = 0;

    while (i < firstWord.length && firstWord[i] === lastWord[i]) {
        i++
    }

    return firstWord.substring(0, i);
}

const first = ["flower","flow","flight"];
const second = ["dog","racecar","car"];


console.log('result', longestCommonPrefixSort(second))
