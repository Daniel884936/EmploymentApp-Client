import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";
import { Home } from '../components/home/Home';
import NavBar from '../shared-components/NavBar/NavBar';
  

export default function AppRouter(){

    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/"  
                component ={Home}                
                />
            </Switch>
        </Router>
    )
}