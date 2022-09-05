import { heroes } from "../data/heroes";
import { getHeroes } from "../helpers/getHeroes";


export const getHeroesByPublisher = (publisher, state) =>{

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }
   
    return state.filter(hero=> hero.publisher === publisher);
}

