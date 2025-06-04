/**  Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  **/


function sortMethod(str) {
    return str.split('').sort().join('')
}

function anagramFunc(data) {
    const hashMap = data.reduce((card, el) => {
        const sorted = sortMethod(el);
        card[sorted] ? card[sorted] = [...card[sorted], el] : card[sorted] = [el]

        return card;
    }, {});

    return  Object.values(hashMap);
}

anagramFunc(["eat", "tea", "tan", "ate", "nat", "bat"])


/**Input: "anagram", "nagaram"
  Output: true
  Input: "rat", "car"
 Output: false **/

const isAnagram = (val1, val2) => {
    const sortVal1   = val1.split('').sort().join('');
    const sortVal2   = val2.split('').sort().join('');
    return sortVal1 === sortVal2;
}

console.log('isAnagram', isAnagram('rat', 'car'))

const isAnagramTwo = (s, t) => {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

/** Input: ["abc", "bca", "aabc", "abca", "xyz"]
 Output: [["abc", "bca"], ["aabc", "abca"], ["xyz"]] **/

const getFreqSignature = (word) => {
    const freq = Array(26).fill(0);

    for (let char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    return freq.join('#');
}


const groupWordsByFrequencySignature = (data) => {
    const result = data.reduce((acc, el) => {
        const sorted = sortMethod(el);

        if (acc[sorted]) {
            acc[sorted] = [...acc[sorted], el]
        } else {
            acc[sorted] = [el]
        }

        return acc;
    }, {})


    return Object.values(result);
}

// groupWordsByFrequencySignature( ["abc", "bca", "aabc", "abca", "xyz"])

/** Input: [1,1,1,2,2,3], k = 2
 Output: [1,2]

 Input: ["apple", "banana", "apple", "orange", "banana", "apple"], k = 2
 Output: ["apple", "banana"]
  **/

const text = (data) => {
    const result = data.reduce((acc, el) => {
        acc[el] ? ++acc[el] : acc[el] = 1;
        return acc;
    }, {});

    return Object.entries(result).map((el) => el[1] >= 2 ? el[0] : false).filter(Boolean);
}

console.log('text', text(["apple", "banana", "apple", "orange", "banana", "apple"]))