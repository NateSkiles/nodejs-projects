// Object property shorthand
// If a variable being passed to an object has the same name as the property it is being assigned to, then shorten to one word
const name = 'Nate'
const userAge = 77

const user = {
    name,
    age: userAge,
    location: 'Portland'
}

console.log(user);


// Destructuring object properties
// Extract values of an object's properties to separate variables
const product = {
    label: 'Blue Notebook',
    price: 3,
    stock: 203,
    salePrice: null,
    rating: null
}

// const label = product.label
// const stock = product.stock


// A colon following the variable name indicates the new name of the variable. 
// const { label:productLabel, stock, rating:stars = 5 } = product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('return', product)