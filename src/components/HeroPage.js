import React from 'react';

import { 
    Grid, 
    Typography, 
    makeStyles, 
    Button,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
    leftPanel: {
        // border: '1px solid green',
        height: '100vh',
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
    },
    title: {
        position: 'absolute',
        top: '10%',
        right: 5,
        marginLeft: 'auto',
        fontFamily: "'Thasadith', sans-serif",
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
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 400,
        display: 'flex',
        justifyContent: 'space-between',
    },
}))


const HeroPage = props => {
    const classes = useStyles();

    return(
        <Grid container>
            <Grid item sm={2} className={classes.leftPanel}>
                <img
                src="https://images.ctfassets.net/cfokra459rhp/3PATgiSaaqbvuqUHL20y5z/d42ba484fa07b033c72118a6ff362200/botanic_gardens-9076.jpg" 
                className={classes.heroImage}
                alt="Hero"
                />
            </Grid>
            <Grid item sm={10} className={classes.rightPanel}>
                <Typography variant="h1" className={classes.title}>Todd Jacobus</Typography>
                <div className={classes.subTitleContainer}>
                    <Typography variant="h6" className={classes.subTitle}>
                        Specializing in geospatial data visualization, 
                        analysis and processing.  Delivering hand-crafted
                        web products, designed with care, front to back.
                    </Typography>    
                </div>
                <div className={classes.navbarContainer}>
                    <Button>Projects</Button>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <hr></hr>
                    <Button>GitHub</Button>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <hr></hr>
                    <Button>Blog</Button>
                </div>
                
            </Grid>
        </Grid>
    )
}

export default HeroPage;