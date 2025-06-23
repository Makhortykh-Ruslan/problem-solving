function isPalindrome(x) {
    const left = x.toString();
    const right = x.toString().split('').reverse().join('');
    return left === right;
}