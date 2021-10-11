import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



export default function NavBar(){

    return (
        <Box sx={{ 
            flexGrow: 1,            
            }}>
        <AppBar color ="inherit" elevation={0} position="static">           
        <Container>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
                </Typography>
                <Button>Login</Button>
          </Toolbar> 
          </Container>       
        </AppBar>
      </Box>
    )
}