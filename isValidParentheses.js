function isValidParentheses(value) {
    const stack = [];
    const open = ['(', '{', '['];

    const dictionary = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for(let el of value) {
        if (open.includes(el)) {
            stack.push(el);
        } else {
            const revers = dictionary[el];

            if (stack.pop() !== revers) {
                return false
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses('(('))