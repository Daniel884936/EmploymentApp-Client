import axios from 'axios'
import { setJobs } from '../actions/job';
import config from '../config/config.json'

const {SERVER_URL: baseUrl} = config;
const jobUrl = "/job"

export function getAllJob(){    
    return async (dispatch) =>{
        await axios.get(`${baseUrl}${jobUrl}`)
        .then(response =>{
            console.log(response.data.data)
            dispatch(setJobs(response.data.data))            
        }).catch(err =>{
            console.log(err)
        })
    }   
}