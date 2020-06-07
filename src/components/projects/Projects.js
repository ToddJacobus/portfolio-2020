import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles,
    Fab,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
} from '@material-ui/core';
import { shadows } from '@material-ui/system';

import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Link } from 'react-router-dom';

import { Link as ReactScrollLink } from 'react-scroll';

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
    drawerToggleButton: {
        background: '#FCFCFC',
        color: '#3B8DBF',
        borderRadius: '0px 10px 10px 0px',
        position: 'fixed',
        left: 0,
        top: 5,
        height: 65,
        width: 65,
        boxShadow: theme.shadows[3],
        zIndex: 3,
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
                    return  <ListItem 
                                button 
                                key={item.id}
                                component={ReactScrollLink}
                                to={item.id}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
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
            <Button
                size="small"
                className={classes.homeActionButton}
                component={Link}
                to="/"
            >
                <HomeIcon />
            </Button>
            <Fab
                size="small"
                className={classes.drawerToggleButton}
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
                        projects_content.items.map(item => {
                            return <Project 
                                    item={item}
                                    linkedAssets={projects_content.linkedAssets} 
                                    key={item.id}
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