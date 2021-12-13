import { Paper ,Grid, Typography,styled, ButtonBase, Button, Chip, Box  } from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/styles'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius : '100%'
})

const useStyle = makeStyles((theme)=>({
    date:{
        marginLeft: 4
    }, 
    paper: {
        padding:'15px'
    },
    company:{
        marginTop:'4px',
        marginBottom:'4px'
    }
}))

export function JobItem({company,title,date,category,img,typeSchedule}){    

    const dateFormated = moment(date)
    date = dateFormated.startOf('day').fromNow()
    const classes = useStyle();

    return (
        <Box sx ={{m:4}}>
        <Paper className ={classes.paper} >
            <Grid container spacing = {2}>
                { img && (
                <Grid item>
                    <Box  sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src ={img}/>
                    </Box>
                </Grid>
                )                
                }
                
                <Grid item xs = {12} sm container>
                    <Grid item xs container direction ="column" spacing ={1}>
                        <Grid item xs>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography className={classes.company} >
                                {company}
                            </Typography>
                            <Grid container direction ="row" item spacing = {1}>
                                <Grid item >
                                    <Typography  color ="primary">
                                        {category}
                                    </Typography>
                                </Grid>

                                <Grid item  >
                                    <Typography className={classes.date} color ="primary">
                                        {date}
                                    </Typography>
                                </Grid>
                            </Grid>                            
                        </Grid>

                        <Grid item >
                            <Button variant="text">See More...</Button>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Chip color="primary" label={typeSchedule}>                    
                    </Chip>        
                    </Grid>
                </Grid>
            </Grid>
        </Paper>        
        </Box>
    )
}
