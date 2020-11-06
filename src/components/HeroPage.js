import React from 'react';
import { connect } from 'react-redux';

import { 
    Grid, 
    Typography, 
    makeStyles, 
    Button,
} from '@material-ui/core';

import {
    Link,
} from 'react-router-dom';

import Ticker from './Ticker';

import {
    fetchTestimony
} from '../actions';

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
            bottom: 20,
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
    primaryButton: {

    },
}))


const HeroPage = props => {
    const { 
        fetchTestimony,
        testimony_content, 
    } = props;
    const classes = useStyles();

    React.useEffect(() => {
        fetchTestimony();
    }, [fetchTestimony]);

    return(
        <div className={classes.root}>
            {
                testimony_content && testimony_content.items ?
                <Ticker items={testimony_content.items}/>
                : <div />
            }
            {/* <Ticker items={testimony_content ? testimony_content.items : undefined} /> */}
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
                        I'm a freelance, full-stack software engineer and specialized 
                        in geospatial applications.  Need a map-based ecommerce 
                        site for your business or a GIS processing and data pipeline? 
                        Get in touch and let's find a solution.
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
                        Portfolio
                    </Button>
                    <hr></hr>
                    <Button
                        component={Link}
                        to="/contact"
                        className={classes.primaryButton}
                        color="primary"
                    >
                        Contact
                    </Button>
                </div>
            </div>    
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        testimony_content: state.testimony_content,
    }
}

export default connect(
    mapStateToProps,
    {
        fetchTestimony,
    }
)(HeroPage);