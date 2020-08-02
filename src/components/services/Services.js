import React from 'react';
import { connect } from 'react-redux';

import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

import {
    Link,
} from 'react-router-dom';


import Service from './Service';
import fetchServices from '../../actions';

const useStyles = makeStyles(theme => ({
    root: {},
}));


const Services = props => {
    const classes = useStyles();

    React.useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid Item xs={4}>
                    <div>Web Design and Development</div>
                </Grid>
                <Grid Item xs={4}>
                    <div>Backend API Development</div>
                </Grid>
                <Grid Item xs={4}>
                    <div>Cartography and GIS</div>
                </Grid>
                

            </Grid>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        services_content: state.services_content,
    }
}

export default connect(
    mapStateToProps,
    {
        fetchServices,
    }
)(Services);