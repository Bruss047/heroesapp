
import { useState, useEffect } from 'react';
import { getHeroes } from '../helpers/getHeroes';



export const useGetHeroesFetch = () =>{

    const [state, setState] = useState({
    heroes:[],
    loading: true
    });

    useEffect(()=>{

       getHeroes().then(res=> setState(
           {    
                heroes:res,
                loading:false
       }));
     
    },[]); 

    
    return state;
}