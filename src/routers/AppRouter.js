import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";
import { Home } from '../components/public/home/Home';
import NavBar from '../shared-components/NavBar/NavBar';
import Container from '@mui/material/Container';
  

export default function AppRouter(){

    return(
        <Router>
            <NavBar/>
            <Container>  
            <Switch>
                <Route path="/"  
                component ={Home}                
                />
            </Switch>            
            </Container>
            
        </Router>
    )
}