import React from 'react';

import { 
    Grid, 
    Typography, 
    makeStyles, 
    Button,
} from '@material-ui/core';

import {
    Link,
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        maxWidth: 1200,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    panelContainer: {
        height: '100vh'
    },
    leftPanel: {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        position: 'relative',
    },
    rightPanel: {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        width: '100%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heroImageContainer: {
        width: '100%',
        height: '100%',
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    heroImage: {
        width: '100%',
        maxWidth: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
    },
    titleContainer: {
        maxHeight: 400,
        height: '100%',
        position: 'relative'
    },
    title: {
        position: 'absolute',
        top: 30,
        right: 5,
        marginRight: 20,
        marginLeft: 'auto',
        fontFamily: "'Dosis', sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: 60,
            marginRight: 5,
        },
    },
    subTitle: {
        position: 'absolute',
        bottom: '15%',
        right: 5,
        marginRight: 20,
        marginLeft: 'auto',
        fontFamily: "'Montserrat', sans-serif",
        textAlign: 'justify',
        maxWidth: 400,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
            maxWidth: 250,
            marginRight: 5,
        },
    },
    navbarContainer: {
        position: 'relative',
        bottom: 100,
        [theme.breakpoints.down('sm')]: {
            bottom: 40,
        },
        width: '100%',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))


const HeroPage = props => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container className={classes.panelContainer}>
                <Grid item sm={6} className={classes.leftPanel}>
                    <div className={classes.heroImageContainer}>
                        <img
                            src="https://images.ctfassets.net/cfokra459rhp/65K1aZJJ3o9nQYu87B7xBZ/19b58e373d962d00d73ea8d9b900d2c6/SanFran-17-8570.jpg"
                            className={classes.heroImage}
                            alt="Hero"
                        />   
                    </div>
                </Grid>
                <Grid item sm={6} className={classes.rightPanel}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h1" className={classes.title}>Todd Jacobus</Typography>
                                <Typography variant="h6" className={classes.subTitle}>
                                    Specializing in geospatial data visualization, 
                                    analysis and processing.  Delivering hand-crafted
                                    web products, designed with care, front to back.
                                </Typography> 
                    </div>
                </Grid>
            </Grid>
            <div className={classes.navbarContainer}>
                <div className={classes.navbar}>
                    <Button
                        component={Link}
                        to="/services"
                    >
                        Services
                    </Button>
                    <hr></hr>
                    <Button
                        component={Link}
                        to="/projects"
                    >
                        Past Work
                    </Button>
                    <hr></hr>
                    <Button
                        component={Link}
                        to="/contact"
                    >
                        Contact
                    </Button>
                </div>
            </div>    
        </div>
        
    )
}

export default HeroPage;