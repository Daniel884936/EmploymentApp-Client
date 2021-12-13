import axios from 'axios'
import config from '../config/config.json'
import {fireInfoDialog,startLoading,stopLoadingDialog} from '../helpers/dialogHelper'

const {SERVER_URL: baseUrl} = config;
const userUrl = "/User";
const authenticationUrl = "/Authentication";

export  function register(user, successCallback, errorCallback){
    fireInfoDialog('Please wait!','loading');
    startLoading();
    const url = `${baseUrl}${userUrl}`;
    axios.post(url, user,{
        headers: {
            "Content-Type": "multipart/form-data"
        }})
    .then(data=>{
        stopLoadingDialog();
        successCallback(data);
    })
    .catch(error=>{                                
        console.log(error.response)
        stopLoadingDialog();
        errorCallback(error.response)
    })     
}


export function login(userLogin,successCallback, errorCallback){
    fireInfoDialog('Please wait!','loading');
    startLoading();
    const url = `${baseUrl}${authenticationUrl}`;
    axios.post(url, userLogin)
    .then(data=>{
        stopLoadingDialog();
        successCallback(data);
    })
    .catch(error=>{                                
        console.log(error.response)
        stopLoadingDialog();
        errorCallback(error.response);
    })     
}