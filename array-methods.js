const products = [
     { name: 'laptop', price: 320000, brand: 'lenovo', color: 'silver' },
     { name: 'phone', price: 3000, brand: 'iphone', color: 'golden' },
     { name: 'watch', price: 320, brand: 'casio', color: 'black' },
     { name: 'sungalss', price: 300, brand: 'ray', color: 'yellow' },
     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brand = products.map(product => product.brand);
// console.log(brand);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product.color));

products.forEach(product => {

});


// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);


// 4. find
const special = products.find(product => product.name.includes('n'))
console.log(special)