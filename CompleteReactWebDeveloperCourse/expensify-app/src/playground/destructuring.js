// object destructering

// const person  = {
//     name: 'Brian',
//     age: 47,
//     location: {
//         city: 'Bedford',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person; 

// console.log(`${name} is ${age}.`);
// const {city, temp: temperature} = person.location;
// if(city && temperature)
//  console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);  // Penguin, Self-Published

//
// Array Destructuring
//

const address = ['1313 Sylvia Drive', 'Bedford', 'Texas', '76021'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffeeType, , medium ] = item;
// Grab first and thir items using array destructering
console.log(`A medium ${coffeeType} costs ${medium} `);