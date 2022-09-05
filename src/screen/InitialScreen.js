import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background_initial1.jpg';


export const InitialScreen = React.memo(() =>{
    


    return (
        <>
           <div style={{ backgroundImage: `url(${background})` }} className="bg-dark text-secondary px-4 py-5 text-center _initialScreen ">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Super Heroes App</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Sitio web dedicado a consultar información sobre un universo de 700 personajes de comics de distintas editoriales
                            siendo DC y Marvel las principales.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                     <Link to={`./dc`}>
                    <button type="button" className="dc_button btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold">DC</button>
                    </Link>

                    <Link to={`./marvel`}>
                    <button type="button" className="marvel_button btn btn-outline-light btn-lg px-4">MARVEL</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )


}
);
