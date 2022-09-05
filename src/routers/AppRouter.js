import React from 'react';
import {
  BrowserRouter as Router,
  Switch

} from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

    // const {user} = useContext(AuthContext);

    return (
      
        <Router>
      <div>
       
        <Switch>
            
            <PublicRoute path="/"
                         component={DashboardRoutes}
                        />

            {/* <PrivateRoute path="/"  //el path pasa por el '...rest' - PrivateRoute protege la ruta de usuarios no logueados.
                          component={DashboardRoutes}
                          /> */}

        </Switch>
      </div>
    </Router>
    )
}
