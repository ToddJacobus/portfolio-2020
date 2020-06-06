import React from 'react';

import { 
    Grid, 
    Typography, 
    makeStyles, 
    Button,
    Hidden,
    Divider,
} from '@material-ui/core';

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
        // border: '1px solid green',
        // height: '100vh',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        position: 'relative',
    },
    rightPanel: {
        // border: '1px solid red',
        // height: '100vh',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        // position: 'relative',
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
        // height: '100%',
        // width: '100%',
        // height: '100%',
        width: '100%',
        // maxHeight: 400,
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
        fontFamily: "'Thasadith', sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: 60,
            marginRight: 5,
        },
    },
    // subTitleContainer: {
    //     maxWidth: 400,
    //     marginLeft: 'auto',
    // },
    subTitle: {
        position: 'absolute',
        bottom: '15%',
        right: 5,
        marginRight: 20,
        marginLeft: 'auto',
        fontFamily: "'Sarabun', sans-serif",
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
                    {/* <Hidden smUp> */}
                    <div className={classes.heroImageContainer}>
                        <img
                            src="https://images.ctfassets.net/cfokra459rhp/65K1aZJJ3o9nQYu87B7xBZ/015766c87e6eb92134c7f058202d2341/SanFran-17-8570.jpg"
                            className={classes.heroImage}
                            alt="Hero"
                        />   
                    </div>
                    
                    {/* </Hidden> */}
                    {/* <Hidden xsDown>
                        <img
                            // src="https://images.ctfassets.net/cfokra459rhp/3PATgiSaaqbvuqUHL20y5z/d42ba484fa07b033c72118a6ff362200/botanic_gardens-9076.jpg" 
                            src="https://images.ctfassets.net/cfokra459rhp/65K1aZJJ3o9nQYu87B7xBZ/015766c87e6eb92134c7f058202d2341/SanFran-17-8570.jpg"
                            className={classes.heroImage}
                            alt="Hero"
                        />
                    </Hidden> */}
                </Grid>
                <Grid item sm={6} className={classes.rightPanel}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h1" className={classes.title}>Todd Jacobus</Typography>
                            {/* <div className={classes.subTitleContainer}> */}
                                <Typography variant="h6" className={classes.subTitle}>
                                    Specializing in geospatial data visualization, 
                                    analysis and processing.  Delivering hand-crafted
                                    web products, designed with care, front to back.
                                </Typography>    
                            {/* </div> */}
                    </div>
                </Grid>
            </Grid>
            <div className={classes.navbarContainer}>
                <div className={classes.navbar}>
                    <Button>Projects</Button>
                    <hr></hr>
                    <Button>GitHub</Button>
                    <hr></hr>
                    <Button>Blog</Button>
                </div>
            </div>    
        </div>
        
    )
}

export default HeroPage;