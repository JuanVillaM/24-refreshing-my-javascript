import { getHeroById } from "./examples/imports-exports";

// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const hero = getHeroById(3);
//         resolve(hero);
//         // reject('Error searching the hero...');
//     }, 2000);
// });
// 
// promise.then( () => {
//     console.log('Hero: ', hero);
// }).catch( err => console.warn( err ) );

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById(id);
            if(hero){
                resolve(hero);
            } else {
                reject('Error searching the hero...');
            }
        }, 2000);
    });
}

getHeroByIdAsync(4)
    .then(console.log)
    .catch(console.warn);