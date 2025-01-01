// 1.JSON => stringify, parse

const student = {
     name: 'Sakib Khan',
     age: 32,
     movies: ["king khan", 'Dhakar Mastan']
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);


// 2. fetch 
fetch('url')
     .then(res => res.json())
     .then(data => console.log(data))

// keys , values 
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object 
// loop on an object using for in 


// add or remove from an array 
const products = [
     { name: 'laptop', price: 320000, brand: 'lenovo', color: 'silver' },
     { name: 'phone', price: 3000, brand: 'iphone', color: 'golden' },
     { name: 'watch', price: 320, brand: 'casio', color: 'black' },
     { name: 'sungalss', price: 300, brand: 'ray', color: 'yellow' },
     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
]; 

const nweProduct = {name: 'webcam', price: 700, brand: 'Lal'};

//copy products array and then add newProduct 
const newProducts = [...products, newNumbers];

// create a new array without one specific item
// remove phone means create a new array without the phone 
const remaining = products.filter(product => product.name !== 'phone');