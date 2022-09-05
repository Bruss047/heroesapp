import React, { useMemo } from 'react'
//import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import { useGetHeroesFetch } from './../../hooks/useGetHeroesFetch';


export const HeroesList = ({publisher}) => {

     
     const {heroes} = useGetHeroesFetch();
     const filter = useMemo(()=> heroes.filter(hero=> hero.publisher === publisher,[publisher]));
    


      if(publisher === ''){

            return (
            <div className="row justify-content-center card-colums animate__animated animate__fadeIn">
                { 
            
                heroes.slice(0, 150).map( hero => (
                    <HeroCard key={hero.id}
                                  {...hero}/>))
                }
            </div>
        )
      }else{
            return (
            <div className="row justify-content-center card-colums animate__animated animate__fadeIn">
                { 
                
                filter.map( hero => (
                    <HeroCard key={hero.id}
                                  {...hero}/>))
                }
                
            </div>
        )
      }
     
}
