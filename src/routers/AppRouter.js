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

    {path:"/", key:"ROOT",exact:true, component:()=>(<><NavBar/><Container><Home/></Container></>)},
    {
        path:"/login",
        key:"LOGIN",
        exact: true,
        component:()=>(<Container><Login/></Container>)
    },
    {
        path:"/register",
        key:"REGISTER",
        exact: true,
        component:()=>(<Container><Register/></Container>)
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
            <Box sx ={{marginTop: 3}}>            
                    <Switch>
                        {
                            routes.map((route)=>{
                                return <RouteWithSubRoutes key = {route.key}  {...route}/>
                            })
                        }
                        <Route component={()=><h1>Not Foount!</h1>}/>
                    </Switch>                
            </Box>
    </Router>
    )    
}


export  function AppRouter(){

    return(
        <RenderRoutes routes={ROUTES}/>
    )    
}