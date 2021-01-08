const characters = ['Goku', 'Vegeta', 'Trunks', 'Juan'];
const [ , , trunks, juan ] = characters;
console.log( trunks, juan );

const returnArr = () => ['ABC', 123];
const [ letters, numbers ] = returnArr();
console.log( letters, numbers );

const useState = ( value ) => [ value, () => console.log('HELLO WORLD!')];
const [ firstName, setName ] = useState('Goku');
console.log(firstName);
setName();
