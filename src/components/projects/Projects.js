import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles,
    Fab,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';

import {
    fetchProjects,
} from '../../actions';

import Project from './Project';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1200,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    floatingActionButton: {
        background: '#435922',
        color: 'white',
        position: 'fixed',
        margin: 50,
        right: 5,
        [theme.breakpoints.down('sm')]: {
            bottom: 5,
            margin: 10,
        },
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
            <Fab
                size="small"
                className={classes.floatingActionButton}
                component={Link}
                to="/"
            >
                <HomeIcon />
            </Fab>
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