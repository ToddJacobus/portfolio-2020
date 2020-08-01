import React from 'react';

import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

import {
    Link,
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {},
}));

const Services = props => {
    const classes = useStyles();

    return (
        <div>
            Welcome to my services... you like?
        </div>
    )
};

export default Services;