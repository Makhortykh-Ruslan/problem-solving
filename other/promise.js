console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => {
        console.log('Promise inside Timeout');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

Promise.resolve().then(() => {
    setTimeout(() => {
        console.log('Timeout inside Promise');
    }, 0);
    console.log('Promise 2');
});

console.log('End');