// const square = function(x) {
//   return x * x;
// };

// /* const squareArrow = (x) => {
//     return x * x;
// }; */

// const squareArrow = (x) => x * x;


// console.log(square(8));
// console.log(squareArrow(9));

const getFirstNameVerbose = function(name) {
    return name.split(' ')[0];
}
const getFirstNameArrow = (name) => {
    return name.split(' ')[0];
}
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstNameVerbose('Brian Silvers'));
console.log(getFirstNameArrow('Brian Silvers'));
console.log(getFirstName('Brian Silvers'));