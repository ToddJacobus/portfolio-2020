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

const Service = props => {
    const classes = useStyles();

    const { item } = props;

    return (
        <Grid Container spacing={4}>
            <Grid Item xs={6}>
                Image compoment
            </Grid>
            <Grid Item xs={6}>
                Text compoment
            </Grid>
        </Grid>
    )
};

export default Service;