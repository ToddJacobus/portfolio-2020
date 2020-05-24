import React from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
    leftPanel: {
        border: '1px solid green',
        height: '100vh',
        position: 'relative',
    },
    rightPanel: {
        border: '1px solid red',
        height: '100vh',
        position: 'relative',
    },
    title: {
        position: 'absolute',
        top: '10%',
        marginLeft: 10,
        fontFamily: "'Thasadith', sans-serif",
    },
    subTitleContainer: {
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 50,
    },
    subTitle: {
        position: 'absolute',
        top: '33%',
        marginLeft: 'auto',
        fontFamily: "'Sarabun', sans-serif",
        textAlign: 'justify',
        maxWidth: 400,
    },
}))


const HeroPage = props => {
    const classes = useStyles();

    return(
        <Grid container>
            <Grid item sm={4} className={classes.leftPanel}>
                <div>Image goes here...</div>
            </Grid>
            <Grid item sm={8} className={classes.rightPanel}>
                <Typography variant="h1" className={classes.title}>Todd Jacobus</Typography>
                <div className={classes.subTitleContainer}>
                    <Typography variant="h6" className={classes.subTitle}>
                        Specializing in geospatial data visualization, 
                        analysis and processing.  Delivering hand-crafted
                        web products, designed with care, front to back.
                    </Typography>    
                </div>
                
            </Grid>
        </Grid>
    )
}

export default HeroPage;