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
    root: {},
    titleContainer: {
        margin: 10,

    },
    title: {
        fontFamily: "'Thasadith', sans-serif",
    },
    bodyContainer: {
        marginTop: 10,
        fontFamily: "'Sarabun', sans-serif",
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
    },
    heroImageContainer: {
        maxWidth: 400,
    },
    heroImage: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))

const Lister = props => {
    const { items, title } = props;

    return (
        <div>
            <Typography>{title}</Typography>
            <List>
                {
                    items ? items.map((item, index) => {
                        return <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText 
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
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Typography
                    className={classes.title}
                    variant="h2"
                >
                    {item.title}
                </Typography>
            </div>
            <div className={classes.listerContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Lister {...item.objectives} />
                        <Lister {...item.techStack} />
                    </Grid>
                    <Grid item xs={6}>
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
                {RenderContentfulRichText(item.body, linkedAssets)}
            </div>
        </div>
    )
}

export default Project;