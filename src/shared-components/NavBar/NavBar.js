import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));


export default function NavBar(){

    const classes = useStyles();

    return (
            <div className={classes.root}>
                    <AppBar color ="inherit" elevation={0} position="static" >           
                    <Container>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                            News
                            </Typography>
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>                            
                      </Toolbar> 
                      </Container>       
                    </AppBar>
            </div>
    )
}