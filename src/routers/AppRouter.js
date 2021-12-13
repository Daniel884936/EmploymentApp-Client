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
import { Login } from '../components/public/auth/Login';
import { Register } from '../components/public/auth/Register';
  

const ROUTES = [

    {path:"/", key:"ROOT",exact:true, component:Home},
    {
        path:"/login",
        key:"LOGIN",
        exact: true,
        component:Login
    },
    {
        path:"/register",
        key:"REGISTER",
        exact: true,
        component:Register
    }
]


export function RouteWithSubRoutes(route){
    return(
            <Route
            path={route.path}
            exact ={route.exact}
            render={props => < route.component {...props} routes ={route.routes}/>}
        />
    )
}

export function RenderRoutes({routes}){
    return(
        <Router>
        <NavBar/>
            <Box sx ={{marginTop: 3}}>
                <Container>
                    <Switch>
                        {
                            routes.map((route)=>{
                                return <RouteWithSubRoutes key = {route.key}  {...route}/>
                            })
                        }
                        <Route component={()=><h1>Not Foount!</h1>}/>
                    </Switch>
                </Container>
            </Box>
    </Router>
    )    
}


export  function AppRouter(){

    return(
        <RenderRoutes routes={ROUTES}/>
    )    
}