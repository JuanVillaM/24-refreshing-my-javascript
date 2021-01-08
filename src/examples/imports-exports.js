import heroes from '../data/heroes';

console.log( owners );

// Function Amplified:
// const getHeroById = (id) => {
//     return heroes.find( ( hero ) => {
//         
//         if(hero.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// Function Simplified:
export const getHeroById = ( id ) => heroes.find( ( hero ) => hero.id === id );
// console.log( getHeroById( 2 ) );

export const getHeroesByOwner = ( owner ) => heroes.filter( ( hero ) => hero.owner === owner );
// console.log( getHeroesByOwner('Marvel') );