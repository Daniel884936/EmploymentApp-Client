import React,{useState} from 'react'
import {Paper, Button, Grid,Typography, TextField,Box} from '@material-ui/core';
import * as yup from 'yup';
import {useFormik} from 'formik'
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../../services/authService';
import { fireErrorToast, fireSuccessToast } from '../../../helpers/toastHelper';
import { separateByUperCase } from '../../../helpers/stringHelper';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().min(6).max(50), 
    password: yup.string().required().min(7).max(50),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Password must be match')
})

const useStyles = makeStyles((theme) => ({
    input: {
        width: '85%',
        margin: "5px"
    }, 
    button:{
        width: '85%',
        margin: "5px",
        marginBottom:'30px'
    }  
  }));

export function Login(){

    const [state, setstate] = useState({
        isLoading: false
    })

    const classes = useStyles();      
    const formik = useFormik({
        initialValues:{            
            email: '',
            password:'', 
            confirmPassword:''            
        },
        validationSchema:validationSchema,

        onSubmit: handleOnSubmit
    });
        
    function handleOnSubmit(values){        

        setstate({
            isLoading:true,
            ...state
        })

        const userLogin = {
            email: values.email,
            password: values.password,            
        }
        
        console.log(userLogin)
        login(userLogin, (data)=>{
            fireSuccessToast("Logged!")
            setstate({
                isLoading:false,
                ...state
            })
        },(data)=>{
            fireErrorToast("Something is wrong!")
            setstate({
                isLoading:false,
                ...state
            })
        })                              
    }      

    return(
        <Box sx ={{ marginLeft : 10, marginRight : 10, p: 4}}>
        <Paper>
        <Box sx ={{  textAlign: "center", mb:4, pt:4}}>
                <Typography  variant="h4" component="h2" color="primary" >
                          Login
                </Typography>
        </Box>
            <form onSubmit ={formik.handleSubmit}>
                <Grid container   spacing = {2}  direction ="column" style={{ textAlign: "center"}} >

                <Grid item>
                <TextField 
                            label ="Email"                         
                            size="small"
                            name ="email" 
                            variant="filled"
                            className={classes.input}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                    </TextField>
                </Grid>

                <Grid item>
                <TextField 
                            label ="Password" 
                            size="small"
                            name ="password" 
                            type="password"
                            variant="filled"
                            className={classes.input}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                    </TextField>
                </Grid>

                <Grid item>
                <TextField 
                            label ="Confirm password" 
                            size="small"
                            name ="confirmPassword" 
                            variant="filled"
                            type="password"
                            className={classes.input}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            value={formik.values.confirmPassword}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                    </TextField>
                </Grid>

                <Grid item>
                        <Button 
                            disabled = {state.isLoading}
                            color="primary"                            
                            className={classes.button}                            
                            variant="contained" 
                            type="submit"
                        >Login                        
                        </Button>
                </Grid>               
            </Grid>    
            </form>                      
            </Paper>
        </Box>                        
 
    )
}