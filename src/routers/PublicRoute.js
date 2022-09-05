import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => {

    return (
       <Route {...rest}
            component={
                (props)=> (
                   
                    <Component {...props} />
                  
                )}
       
       />
    )
}

     PublicRoute.propTypes={
         component: PropTypes.func.isRequired
     }