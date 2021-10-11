import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { startLoadingJobs } from '../../../actions/job';
import {JobItem} from './JobItem'




export function JobList() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startLoadingJobs())
    }, [dispatch])  
      
    const {jobs} = useSelector(state => state.jobs)
    console.log(jobs) 

    return (
        <>
           {   
                (jobs) && (
                    jobs && jobs.map(job =>(
                    <JobItem
                        key =  {job.id}
                        title = {job.title}jobs
                        date = {job.date}
                        category = {job.category}
                        typeSchedule = {job.typeSchedule}
                        company = {job.company}
                    />    
               ))
            )                                    
           } 
        </>
    )
}
