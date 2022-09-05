import React from 'react';
import queryString from 'query-string'; 
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from './../../useForm';
//import { getHeroesByName } from './../../selectors/getHeroesByName';
import { useGetHeroesFetch } from './../../hooks/useGetHeroesFetch';



export const SearchScreen = ({history}) => {

     
    const {heroes} = useGetHeroesFetch();

    const location= useLocation();

    const {q=''} = queryString.parse(location.search); //lee un query string y lo parsea.
    
    const [formValues,handleInputChange] = useForm({searchText: q});

    const {searchText} = formValues;

    
    const getHeroesByName = (name) => {

            if(name===''){
                return [];
            }

            name= name.toLocaleLowerCase();

            return heroes.filter(hero=> hero.name.toLocaleLowerCase().includes(name));
        }
    
    //const heroesFiltered= useMemo(()=> getHeroesByName(q),[q]);
    const heroesFiltered = getHeroesByName(q)//useMemo(()=>getHeroesByName(q),[q]);   //getHeroesByName(searchText);
   
    
   

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);

    }

   



    return (
        <div className="_containerSearchScreen">

            <h1>Búsqueda de Héroe</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>¿A quién buscás?</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Nombre del héroe/ personaje"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                                />

                        <button  
                            type="submit"
                            className="btn m-2 btn-block btn-warning"> Buscar
                    </button>
                    </form>
                
                </div>
                <div className="col-7">
                    <h4> Resultados </h4>
                    <hr/>

                    { 
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Buscar Heroe.
                        </div>

                    }
                    { 
                        (q!==''&& heroesFiltered.length===0)
                        &&
                        <div className="alert alert-danger">
                            No se encontraron heroes con nombre : {q}
                        </div>

                    }


                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard key={hero.id}
                                {...hero}/>
                        ))
                    }
                </div>
                
            </div>

        </div>
    )
}
