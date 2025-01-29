/** First bed solution  **/
// function longestCommonPrefix(strs) {
//     let result = '';
//
//     const card = {};
//
//     strs.forEach((el) => {
//         const transformed = [...el];
//
//         transformed.forEach((el, idx) => {
//             if (card[el] && card[el].idx === idx) {
//                 card[el] = {
//                     ...card[el],
//                     count: card[el].count + 1
//                 }
//             } else {
//                 card[el] = {
//                     lt: el,
//                     idx,
//                     count: 1
//                 }
//             }
//         })
//
//     })
//
//     const filter = Object.values(card).filter((el) => el.idx <= strs.length && el.count === strs.length);
//
//     filter.forEach((el) => {
//         result = result + el.lt
//     })
//
//     return result
//
//     // let prefix = strs[0]
//     //
//     // strs.forEach((word) => {
//     //     const transformedWord = word.split('');
//     //
//     //     transformedWord.forEach((el) => {
//     //         if (!prefix.includes(el)) {
//     //             prefix = prefix.slice(0, -1);
//     //         }
//     //     })
//     // })
//     //
//     // return prefix
// }

/** Second bed solution  **/
// function longestCommonPrefix(strs) {
//     let prefix = strs[0]
//
//     strs.forEach((word) => {
//         const transformedWord = word.split('');
//
//         transformedWord.forEach((el) => {
//             if (!prefix.includes(el)) {
//                 prefix = prefix.slice(0, -1);
//             }
//         })
//     })
//
//     return prefix
// }


/** Solution  **/
function longestCommonPrefix(strs) {
    let prefix = strs[0]
    let check = ''

    strs.forEach((word) => {
        const transformedWord = word.split('');

        transformedWord.forEach((el) => {
            if (!prefix.includes(el)) {
                prefix = prefix.slice(0, -1);
            }
        })
    })

    return prefix
}

const first = ["flower","flow","flight"];
const second = ["dog","racecar","car"];

