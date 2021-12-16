import React,{useState} from 'react'
import {Paper, Button, Grid,Typography, TextField,Box} from '@material-ui/core';
import * as yup from 'yup';
import {useFormik} from 'formik'
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import {register} from '../../../services/authService'
import { fireErrorToast, fireSuccessToast } from '../../../helpers/toastHelper';
import { separateByUperCase } from '../../../helpers/stringHelper';


const validationSchema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    surnames: yup.string().required().min(3).max(50),    
    email: yup.string().required().email().min(6).max(50), 
    password: yup.string().required().min(7).max(50),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Password must be match')
    .required().min(7).max(50),
    bithdate: yup.date().required()
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

export function Register(){    

    const currentDate = new Date();
    const classes = useStyles();   
    const [state, setstate] = useState({
        isLoading: false
    })
       
    const formik = useFormik({
        initialValues:{
            name:'',
            surnames:'',
            email: '',
            password:'', 
            confirmPassword:'',
            bithdate: currentDate
        },
        validationSchema:validationSchema,

        onSubmit: handleOnSubmit
    });
        
    function handleOnSubmit(values){
            setstate({
                isLoading:true,
                ...state
            })                                
            let userFormDate = new FormData();
            userFormDate.append('Name',values.name)
            userFormDate.append('Email',values.email)
            userFormDate.append('Password',values.password)
            userFormDate.append('RoleId',1)
            userFormDate.append('Surnames',values.surnames)
            userFormDate.append('Bithdate',values.bithdate.toISOString())
            console.log(userFormDate)
            register(userFormDate, (data)=>{
                setstate({
                    isLoading:false,
                    ...state
                    })

                fireSuccessToast('Registered!')
            },(data)=>{
                if(data.status === 409){
                    fireErrorToast('User already exist')
                }
                if(data.status === 500){
                    fireErrorToast(separateByUperCase(data.data.title))
                }
            })           
    }      

    return(
        <Box sx ={{ marginLeft : 10, marginRight : 10, p: 4}}>
        <Paper>
        <Box sx ={{  textAlign: "center", mb:4, pt:4}}>
                <Typography  variant="h4" component="h2" color="primary" >
                          Register
                </Typography>
        </Box>
            <form onSubmit ={formik.handleSubmit}>
                <Grid container   spacing = {2}  direction ="column" style={{ textAlign: "center"}} >
                <Grid item>
                    <TextField 
                            label ="Name"                            
                            name ="name"
                            size="small"                            
                            variant="filled" 
                            className={classes.input}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                    </TextField>                
                </Grid>

                <Grid item>
                <TextField 
                            label ="Surnames" 
                            size="small"
                            name ="surnames" 
                            variant="filled"
                            className={classes.input}
                            error={formik.touched.surnames && Boolean(formik.errors.surnames)}
                            helperText={formik.touched.surnames && formik.errors.surnames}
                            value={formik.values.surnames}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                    </TextField>
                </Grid>

                <Grid item>
                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <KeyboardDatePicker
                        label ="Birthdate" 
                        value={formik.values.bithdate}                        
                        onChange={(date, value)=>{
                            console.log(value)
                            const valueInDateType = new Date(value); 
                            if(valueInDateType instanceof Date && !isNaN(valueInDateType) && value){
                                formik.setFieldValue("bithdate", valueInDateType)     
                            }else{
                                formik.setFieldValue("bithdate", currentDate)     
                            }                                   
                        }}
                        error={formik.touched.bithdate && Boolean(formik.errors.bithdate)}
                        helperText={formik.touched.bithdate && formik.errors.bithdate}
                        format="MM-DD-YYYY"
                        placeholder="10/Tu/2018"
                        size="small"
                        autoOk
                        name ="bithdate"
                        minDate = {new Date(1990,1,1)}
                        maxDate = {currentDate}
                        inputVariant="filled"                        
                        className={classes.input}                        
                    />
                </MuiPickersUtilsProvider>
                </Grid>

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
                        >Register
                        </Button>
                </Grid>               
            </Grid>    
            </form>                      
            </Paper>
        </Box>                        
    )
}