import React ,{useEffect}from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { HeroHome } from './../components/heroes/HeroHome';
import { InitialScreen} from './../screen/InitialScreen';
import { Footer } from './../components/Footer';



export const DashboardRoutes = () => {

    const {pathname} = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0)
    }, []);
    
    return (
        <>
            <Navbar />
            
                {  ( !pathname.includes("/hero") && pathname !=="/searchscreen" ) && 
                    <InitialScreen/>
                
                }
        
            <div className="container">
                <Switch>

                    <Route exact path="/" component= {HeroHome}/>
                    <Route exact path="/marvel" component= {MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component= {HeroeScreen}/>
                    <Route exact path="/dc" component= {DcScreen}/>
                    <Route exact path="/searchscreen" component= {SearchScreen}/>
                    <Redirect to="/"/> {/* redirecciona al path de marvel si no ingresa en ninguno de los otros. */}
                    

                </Switch>
                      
            </div>

             <Footer/>      
            
        </>
    )
}
