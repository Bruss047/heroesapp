import React from 'react';

export const Footer = () => {
    let anio= new Date().getFullYear();

    return (
         <>       
            
                <footer className="page-footer font-small teal pt-4">

                
                <div className="container-fluid  text-center">

                    <div className="col-md-10 mx-auto justify-content-center">

                        <h5 className="text-uppercase font-weight-bold">Super Heroes App</h5>
                        <p> Creado con React consumiendo datos de "SuperHero API". Link: https://superheroapi.com/ 
                        </p>

                    </div>
                    

                
                    

                </div>
                

                <div className="footer-copyright text-center py-3">© {anio} Copyright:
                Javier Bruzzese
                </div>


                </footer>

                </>
    )


}