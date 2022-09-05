import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetHeroesFetch } from './../../hooks/useGetHeroesFetch';



export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();
    const {heroes} = useGetHeroesFetch();

   

    const hero = heroes.find( hero => hero.id === Number(heroeId));
    
    // useEffect(() => {
    // window.scrollTo(0, 0)
    // }, []);
  
    let name="",
        fullName= "",
        img="",
        alterEgo= "",
        publisher= "",
        firstApp= "",
        gender = "",
        race= "",
        height= "",
        weight= "",
        affiliations= "";
            
    

    if(hero !== undefined){
        
         alterEgo= hero.alterEgo;
         fullName= hero.fullName;
         firstApp= hero.firstApp;
         img = hero.imgs;
         name= hero.name;
         publisher= hero.publisher;
         gender = hero.gender;
         race= hero.race;
         height= hero.height;
         weight= hero.weight;
         affiliations= hero.affiliations;
    }
    
    
        
   

    const handleReturn = () =>{
        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }

    return (

        <div className="_containerHeroScreen row mt-5">
            <div className="col-5 col-md-4">
               
                <img    
                    //src={`../assets/heroes/${heroeId}.jpg`} Importación desde public folder.
                    src={img}
                    alt={name}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-7 col-md-8">
                <h2>{name}</h2>
                <ul className="data list-group list-group-flush">
                    <li className="list-group-item"> <b>Nombre Real: </b> {fullName} </li>
                    <li className="list-group-item"> <b>Alter ego: </b> {alterEgo} </li>
                    <li className="list-group-item"> <b>Género: </b> {gender} </li>
                    <li className="list-group-item"> <b>Raza: </b> {race} </li>
                    <li className="list-group-item"> <b>Altura: </b> {height} </li>
                    <li className="list-group-item"> <b>Peso: </b> {weight} </li>
                    <li className="list-group-item"> <b>Agrupaciones: </b> {affiliations} </li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b>Primera Aparición: </b> {firstApp} </li>
                </ul>

                <button className="btn btn-warning"
                        onClick={handleReturn}>
                    Volver
                </button>
            </div>
           
        </div>
    )

    
}
