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

const first = ["flower","flow","flight"];
const second = ["dog","racecar","car"];

console.log(longestCommonPrefix(second))
