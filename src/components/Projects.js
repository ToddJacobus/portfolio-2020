import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles
} from '@material-ui/core';

import {
    fetchProjects,
} from '../actions';

const useStyles = makeStyles(theme => ({
    root: {},
}));

const Projects = props => {
    const classes = useStyles();

    const { fetchProjects } = props;

    React.useEffect(() => {
        fetchProjects();
    }, [fetchProjects])

    return (
        <div className={classes.root}>
            Projects...wow!
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects_content: state.projects_content,
    }
}

export default connect(
    mapStateToProps,
    {
        fetchProjects,
    }
)(Projects);