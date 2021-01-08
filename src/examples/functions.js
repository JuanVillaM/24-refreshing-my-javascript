const  regret = function( name ){
    return `Hello ${name}`;
}

const regret2 = ( name ) => {
    return `Hello ${name}`;
}

const regret3 = ( name ) => `Hello ${name}`;

const regret4 = () => 'Hello World!';


console.log(regret('Goku'));
console.log(regret2('Goku'));
console.log(regret3('Goku'));
console.log(regret4());

const getUser = () => ({
    userId: 'ABCD12321',
    userName: 'THE_CONNOR465'
});

const user = getUser();

console.log(user);

// function getActiveUser( name ){
//     return {
//         userId: 'ABCD414',
//         userName: name
//     }
// };

const getActiveUser = (name) => ({
    userId: 'ABCD414',
    userName: name
});

const activeUser = getActiveUser('Juan');
console.log(activeUser);