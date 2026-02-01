// function apiCall() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Azure Connection Timeout"), 2000);
//     });
// }

// async function uploadData() {
//     try {
//     const result = await apiCall();
//     console.log("Uploaded:", result);
//     } catch(error) {
//         console.log("Error:", error);
//     }
// }

// uploadData()

// async function fetchWithRetry(url) {
//     try {
//         return await fetch(url);
//     } catch (error) {
//         console.log("First try error...");

//         await new Promise(resolve => setTimeout(() => resolve(), 1000));

//         return await fetch(url);
//     }
// }

process.on('uncaughtException', (err) => {
    console.log('NodeJS перехопив критичний throw:', err.message);
});

async function getErrorCorrectly() {
    await new Promise(res => setTimeout(res, 2000)); 
    throw new Error('getError');
}

function getDataProducts() {
    return new Promise((resolve, reject) => setTimeout(() => resolve('getDataProducts'), 1000))
}

function getDataCards() {
    return new Promise((resolve) => setTimeout(() => resolve('getDataCards'), 1000))
}

function getDataMembers() {
    return new Promise((resolve) => setTimeout(() => resolve('getDataMembers'), 1000))
}

try {
    const initData = await Promise.all([
        getDataProducts(),
        getDataCards(),
        getDataMembers(),
        getErrorCorrectly()
    ])

    console.log(initData)
} catch (error) {
    console.log('Error:', error)
}

