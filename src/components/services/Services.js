import React from 'react';
import { connect } from 'react-redux';

import {
    Typography,
    Fab,
    makeStyles,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';

import {
    Link,
} from 'react-router-dom';


import Service from './Service';
import { fetchServices } from '../../actions';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    homeActionButton: {
        background: '#FCFCFC',
        color: '#3B8DBF',
        borderRadius: '10px 0px 0px 10px',
        height: 65,
        width: 65,
        position: 'fixed',
        right: 0,
        top: 5,
        boxShadow: theme.shadows[3],
        zIndex: 3,
    },
    titleContainer: {
        width: "100%",
        height: '33vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50,
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
            <Fab
                size="small"
                className={classes.homeActionButton}
                component={Link}
                to="/"
            >
                <HomeIcon />
            </Fab>
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