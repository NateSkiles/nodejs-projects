// setTimeout(() => {
//     console.log('Two seconds are up');
// }, 2000)

// const names = ['Nate', 'Michael', 'Jake', 'George']

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// console.log(shortNames);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Portland', (data) => {
//     console.log(data)
// })

// function add(a, b, callback) {
//     setTimeout(() => {
//         let sum = a + b
//         callback(sum)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })



const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('Error ❌', undefined)
        callback(undefined, { name: 'Nate'})
    }, 2000)
}

doWorkCallback((err, res) => {
    if (err) {
        return console.log(err)
    }
    console.log(res)

})