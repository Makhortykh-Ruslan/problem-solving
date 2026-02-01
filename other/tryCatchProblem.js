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

async function fetchWithRetry(url) {
    try {
        return await fetch(url);
    } catch (error) {
        console.log("First try error...");

        await new Promise(resolve => setTimeout(() => resolve(), 1000));

        return await fetch(url);
    }
}