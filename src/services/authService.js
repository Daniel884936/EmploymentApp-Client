import axios from 'axios'
import config from '../config/config.json'
import {infoDialog,startLoading,stopLoadingDialog, errorFromServerDialog} from '../helpers/dialogs'

const {SERVER_URL: baseUrl} = config;
const userUrl = "/User";

export  function register(user, callback){
    infoDialog('Please wait!','loading');
    startLoading();
    const url = `${baseUrl}${userUrl}`;
    axios.post(url, user,{
        headers: {
            "Content-Type": "multipart/form-data"
        }})
    .then(data=>{
        stopLoadingDialog();
        callback(data);
    })
    .catch(error=>{                        
        errorFromServerDialog('Error', 'Something is wrong', error.response)
        console.log(error.response)
        stopLoadingDialog();
    })     
}