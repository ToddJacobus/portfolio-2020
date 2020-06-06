import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles
} from '@material-ui/core';

import {
    fetchProjects,
} from '../../actions';

import Project from './Project';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1200,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const Projects = props => {
    const classes = useStyles();

    const { 
        fetchProjects,
        projects_content,
     } = props;

    React.useEffect(() => {
        fetchProjects();
    }, [fetchProjects])

    return (
        <div className={classes.root}>
            {
                projects_content ?
                projects_content.items.map((item, index) => {
                    return <Project 
                            item={item}
                            linkedAssets={projects_content.linkedAssets} 
                            key={index} 
                            />
                })
                : <div />
            }
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