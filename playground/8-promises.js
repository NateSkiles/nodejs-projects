const doWorkPromise = new Promise((resolve, reject) => {
    const user = { name: 'Nate' }

    setTimeout(() => {
        reject(console.log(`${user.name}, something went wrong.`))
        resolve(console.log(`${user.name}`))
    }, 2000);
})

doWorkPromise
    .then((result) => { console.log('Success ✅', result)})
    .catch((err) => { console.log('Error!');})

console.log('Hi');


// 
// 
//                                            fulfilled
//                                          /
// Promise              --- pending --->    
//                                          \
//                                            rejected
//  