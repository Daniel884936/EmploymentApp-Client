import { getAllJob } from '../services/jobService'
import { types } from '../types/types';


 export function startLoadingJobs(){
    return getAllJob();          
} 

export function setJobs(jobs){
    return {
        type: types.GetJobs,
        payload: jobs
    }
}