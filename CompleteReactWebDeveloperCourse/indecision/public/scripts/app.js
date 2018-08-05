'use strict';

// arguments object - no longer bound with arrow functions

// const add = function(a,b) {
//     console.log(arguments);
//     return a + b;
// };

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

// this keyword -  no longer bound with arrow functions

var user = {
    name: 'Andrew',
    cities: ['Philidalphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        //return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city );
        // })
    }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    multiply: function multiply(numbers, multiplyBy) {
        return numbers.map(function (number) {
            return number * multiplyBy;
        });
    }
};

var numbers = [1, 2, 3];

console.log(multiplier.multiply(numbers, 2));
