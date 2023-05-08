import {heroes} from '../data/heroes';

export const getHeroById = (id) => {
    // if(!heroes.find(hero => hero.id === id)) {
    //     throw new Error('Hero Not Exist')
    // }
    return heroes.find(hero => hero.id === id);
}