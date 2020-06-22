import React from 'react'

import {
    makeStyles, 
    Typography, 
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,

} from '@material-ui/core';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';

import RenderContentfulRichText from '../RTFRenderer';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
    },
    listerRoot: {},
    titleContainer: {
        marginLeft: 10,
        marginRight: 'auto',
        maxWidth: 800,

    },
    title: {
        fontFamily: "'Dosis', sans-serif",
    },
    bodyContainer: {
        marginTop: 10,
        fontFamily: "'Montserrat', sans-serif",
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
    },
    listerContainer: {
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
        marginBottom: 100,
    },
    listerText: {
        fontFamily: "'Montserrat', sans-serif",
    },
    arrowRightSharpIcon: {
        zIndex: 0,
        color: '#3B8DBF',
    },
    heroImageContainer: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    heroImage: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))

const Lister = props => {
    const classes = useStyles();
    const { items, title } = props;

    return (
        <div className={classes.listerRoot}>
            <Typography 
                className={classes.listerText} 
                variant={'h6'
            }>
                {title}
            </Typography>
            <List>
                {
                    items ? items.map((item, index) => {
                        return <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightSharpIcon 
                                            className={classes.arrowRightSharpIcon} 
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={classes.listerText} 
                                        primary={item.primary} 
                                        secondary={item.secondary} 
                                    />
                                </ListItem>
                    }) : <div />
                }
            </List>    
        </div>
        
    )
};

const Project = props => {
    const classes = useStyles();

    const {
        item,
        linkedAssets,
        setModalOpen,
        setModalChildren,
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer} name={item.id}>
                <Typography
                    className={classes.title}
                    variant="h2"
                >
                    {item.title}
                </Typography>
            </div>
            <div className={classes.listerContainer}>
                <Grid container spacing={0}>
                    <Grid item sm={6}>
                        <Lister {...item.objectives} />
                        <Lister {...item.techStack} />
                    </Grid>
                    <Grid item sm={6}>
                        <div className={classes.heroImageContainer}>
                            <img 
                                className={classes.heroImage} 
                                src={item.heroImage} 
                                alt={item.title} 
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.bodyContainer}>
                {
                    RenderContentfulRichText(
                        item.body, 
                        linkedAssets,
                        setModalOpen,
                        setModalChildren,
                    )
                }
            </div>
        </div>
    )
}

export default Project;