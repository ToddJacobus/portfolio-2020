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

    },
    leftPanel: {
        // border: '1px solid green',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        position: 'relative',
    },
    rightPanel: {
        // border: '1px solid red',
        height: '100vh',
        position: 'relative',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    heroImage: {
        height: '100%',
        // width: '100%',
    },
    heroImageMobile: {
        height: '100%',
    },
    title: {
        position: 'absolute',
        top: '10%',
        right: 5,
        marginLeft: 'auto',
        fontFamily: "'Thasadith', sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: 60,
        },
    },
    subTitleContainer: {
        maxWidth: 400,
        marginLeft: 'auto',
    },
    subTitle: {
        position: 'absolute',
        top: '33%',
        right: 5,
        marginLeft: 'auto',
        fontFamily: "'Sarabun', sans-serif",
        textAlign: 'justify',
        maxWidth: 400,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 5,
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
        <div>
            <div className={classes.navbarContainer}>
                <div className={classes.navbar}>
                    <Button>Projects</Button>
                    <hr></hr>
                    <Button>GitHub</Button>
                    <hr></hr>
                    <Button>Blog</Button>
                </div>
                
            </div>
            <Grid container>
                <Grid item xs={6} className={classes.leftPanel}>
                    <Hidden smUp>
                        <img
                            src="https://images.ctfassets.net/cfokra459rhp/65K1aZJJ3o9nQYu87B7xBZ/015766c87e6eb92134c7f058202d2341/SanFran-17-8570.jpg"
                            className={classes.heroImageMobile}
                            alt="Hero"
                        />
                    </Hidden>
                    <Hidden xsDown>
                        <img
                            src="https://images.ctfassets.net/cfokra459rhp/3PATgiSaaqbvuqUHL20y5z/d42ba484fa07b033c72118a6ff362200/botanic_gardens-9076.jpg" 
                            className={classes.heroImage}
                            alt="Hero"
                        />
                    </Hidden>
                </Grid>
                <Grid item xs={6} className={classes.rightPanel}>
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
        </div>
        
    )
}

export default HeroPage;