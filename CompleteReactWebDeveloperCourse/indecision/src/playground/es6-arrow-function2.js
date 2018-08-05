// arguments object - no longer bound with arrow functions

// const add = function(a,b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a,b) => {
    return a + b;    
}


console.log(add(55,1));

// this keyword -  no longer bound with arrow functions

const user = {
    name : 'Andrew',
    cities: ['Philidalphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        return this.cities.map((city) =>  this.name + ' has lived in ' +  city );
        //return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city );
        // })
    }
}

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    multiply(numbers, multiplyBy) {
        return numbers.map((number) => number * multiplyBy);
    }
}

const numbers = [1,2,3];

console.log(multiplier.multiply(numbers, 2));