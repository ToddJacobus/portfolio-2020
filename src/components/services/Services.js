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
    titleContainer: {
        width: "100%",
        height: '33vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
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
            <div className={classes.titleContainer}>
                <Typography variant="h2" className={classes.title} >
                    What I can do
                </Typography>
            </div>
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