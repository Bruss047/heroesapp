import React from 'react';
import { Link, NavLink} from 'react-router-dom';



export const Navbar = () => {
   
 
    return (
        
        <nav className="navbar bg-dark navbar-expand-md bg-success justify-content-between fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                               
                                <NavLink 
                                    activeClassName="active"
                                    className="nav-link pl-0" 
                                    exact
                                    to="/dc"
                                >
                                    DC
                                </NavLink>

                            </li>
                            <li className="nav-item">
                               
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link" 
                                        exact
                                        to="/marvel"
                                    >
                                        Marvel
                                    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/searchscreen"
                                >
                                    Buscar Heroe
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                  
                    <Link 
                        className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25" 
                        to="/"
                    >
                        Heroteca
                    </Link>
                    <div className="navbar-collapse collapse dual-nav w-50 order-2">
                        <ul className="nav navbar-nav ml-auto">
                            {/* <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-twitter"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-github"></i></a></li> */}
                        </ul>
                    </div>
                </div>
        </nav>
        
        
    )
}