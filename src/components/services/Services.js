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
import { fetchServices } from '../../actions';

const useStyles = makeStyles(theme => ({
    root: {},
}));


const Services = props => {
    const classes = useStyles();

    const {
        services_content,
        fetchServices,
    } = props;

    React.useEffect(() => {
        fetchServices();
    }, [fetchServices])

    return (
        <div className={classes.root}>
            {
                services_content ?
                services_content.items.map( (item, index) => {
                    return <Service { ...item } index={index} key={item.id} />
                })
                : <div />
            }
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