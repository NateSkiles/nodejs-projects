// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(32))


const event = {
    name: 'Birthday Party',
    guestList: ['Nate', 'Alice', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        // Arrow functions DON'T bind their own this value
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()