import React from 'react'

import { HeroesList } from './../heroes/HeroesList';

export const MarvelScreen = () => {
    return (
        
        <div className="">
  
            <h1>Personajes Marvel</h1>
            <hr/>
            <HeroesList publisher={"Marvel Comics"}/>
        </div>
    )
}
