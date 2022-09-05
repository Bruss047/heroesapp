import React from 'react';
import { Link } from 'react-router-dom';




export const HeroCard = ({
        id,
        name,
        imgs,
        firstApp
    
    }) => {

    return (
        
        <div className="card col-8 ms-3" style={{maxWidth:460}}>
            <div className="row no-gutters">
                <div className="col-10 col-md-4">
                    <img src={imgs} className="card-img" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h4 className="card-title"> {name} </h4>
                  
                    <p className="card-text">
                        <small className="text-muted"> Prim. aparición: {firstApp}</small>
                    </p>
                    <Link to={`./hero/${id}`}>
                      Más...
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
