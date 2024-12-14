const numbers = [89, 35, 98, 12];
const student = {
     name: 'Sakib Khan',
     age: 32,
     movies: ["king khan", 'Dhakar Mastan']
};


// 1. template string 
const about = `My name is ${student.name} age of ${student.age} has numbers ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about)


// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z; 
const 