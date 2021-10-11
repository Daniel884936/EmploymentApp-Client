import { Paper ,Grid, Typography,styled, ButtonBase, Button, Chip  } from '@mui/material'
import React from 'react'
import moment from 'moment'

export function JobItem({company,title,date,category,img,typeSchedule}){

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius : '100%'
    })

    const dateFormated = moment(date)
    date = dateFormated.startOf('day').fromNow()

    return (
        <>
        <Paper  sx ={{marginTop: 3, marginLeft : 10, marginRight : 10, p: 3, pr: 4}}>
            <Grid container spacing = {2}>
                <Grid item>
                    <ButtonBase  sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src ="https://xolutime.com/web-images/icon-xolutech.jpg"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs = {12} sm container>
                    <Grid item xs container direction ="column" spacing ={1}>
                        <Grid item xs>
                            <Typography component = "div">
                                {title}
                            </Typography>
                            <Typography  >
                                {company}
                            </Typography>
                            <Grid container direction ="row" item spacing = {0.5}>
                                <Grid item >
                                    <Typography   color ="text.secondary">
                                        {category}
                                    </Typography>
                                </Grid>

                                <Grid item  >
                                    <Typography sx = {{ml: 4}}   color ="text.secondary">
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
                        <Chip color="secondary" label={typeSchedule}>                    
                    </Chip>        
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

        
        </>
    )
}
