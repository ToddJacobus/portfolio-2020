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
    imagePanel: {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            height: '50%',
        },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textPanel: {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            height: '50%',
        },
        width: '100%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heroImage: {
        width: '100%',
        maxHeight: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    titleContainer: {
        maxHeight: 400,
        height: '100%',
    },
    title: {
        marginRight: 20,
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: 60,
            marginRight: 5,
        },
    },
    subTitle: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 'auto',
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
            <Grid container spacing={4} className={classes.panelContainer}>
                <Grid item sm={6} className={classes.imagePanel}>
                    <img
                        src="https://images.ctfassets.net/cfokra459rhp/65K1aZJJ3o9nQYu87B7xBZ/19b58e373d962d00d73ea8d9b900d2c6/SanFran-17-8570.jpg"
                        className={classes.heroImage}
                        alt="Hero"
                    /> 
                </Grid>
                <Grid item sm={6} className={classes.textPanel}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h1" className={classes.title}>
                            Todd Jacobus
                        </Typography>
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