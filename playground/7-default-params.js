const product = {
    label: 'Blue Notebook',
    price: 3,
    stock: 203,
    salePrice: null,
    rating: null
}

const transaction = (type, { label, stock } = {}) => {
    console.log(type, label, stock);
}

transaction('order')