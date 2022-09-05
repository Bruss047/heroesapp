//import { heroes } from "../data/heroes";

export const getHeroById = (heroes, id) =>{

    console.log(heroes)

    return heroes.find( hero => hero.id === id);
    
}