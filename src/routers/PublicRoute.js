import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export function PublicRoute({
    isAuthenticated,
    component: Component,
    ...rest
}){
    return (
        <Route {...rest} 
            component ={
                (props)=>{
                    !(isAuthenticated)
                    ?(<Component{...props}/>)
                    :(<Redirect to="/"/>)
                }
            }        
        />
    )
}
