const firstName = 'Juan';
const lastName = 'Villa';
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

function getRegret( name ){
    return `Hello ${name}`;
}

console.log(`I have something to tell you... ${getRegret(fullName)}`);

