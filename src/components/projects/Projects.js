import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles,
    Fab,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';

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
        // margin: 50,
        right: 5,
        top: 5,
        margin: 50,
        [theme.breakpoints.down('sm')]: {
            bottom: 10,
            // margin: 10,
        },
    },
    drawerToggleFab: {
        background: '#435922',
        color: 'white',
        position: 'fixed',
        // margin: 50,
        left: 5,
        top: 5,
        margin: 50,
        [theme.breakpoints.down('sm')]: {
            bottom: 10,
            // margin: 10,
        },
    },
    drawerPaper: {
        maxWidth: '80%',
    },
    projectsListRoot: {
        marginTop: 100,
    },
}));

const DrawerList = props => {
    const { items } = props;

    return (
        <List>
            {
                items ? items.map(item => {
                    return  <ListItem button key={item.id}>
                                <ListItemText 
                                    primary={item.title}
                                    secondary={
                                        `${item.techStack.items.map(
                                                item => item.primary
                                            ).join(', ')}`
                                        }
                                />
                            </ListItem>
                })
                : <div />
            }
        </List>
    )
};

const Projects = props => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleSetOpen = open => {
        setOpen(open);
    };

    const { 
        fetchProjects,
        projects_content,
     } = props;

    React.useEffect(() => {
        fetchProjects();
    }, [fetchProjects])

    return (
        <div>
            <Fab
                size="small"
                className={classes.floatingActionButton}
                component={Link}
                to="/"
            >
                <HomeIcon />
            </Fab>
            <Fab
                size="small"
                className={classes.drawerToggleFab}
                onClick={() => handleSetOpen(true)}
            >
                <ArrowForwardIosIcon />
            </Fab>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => handleSetOpen(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <DrawerList 
                    items={projects_content ? projects_content.items : []}
                />
            </Drawer>
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