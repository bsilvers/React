var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const constName = 'Frank';

console.log('constName', constName);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

let pn = getPetName();
console.log('pn', pn);


// Block scoping
var fullName = 'Brian Silvers';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}