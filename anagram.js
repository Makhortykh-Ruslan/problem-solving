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