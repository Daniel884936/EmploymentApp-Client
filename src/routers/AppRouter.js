import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";
import { Home } from '../components/public/home/Home';
import NavBar from '../shared-components/NavBar/NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
  

export default function AppRouter(){

    return(
        <Router>
            <NavBar/>
            <Box sx ={{marginTop: 3}}>
            <Container>  
            <Switch>
                <Route path="/"  
                component ={Home}                
                />
            </Switch>            
            </Container>
            </Box>
        </Router>
    )
}