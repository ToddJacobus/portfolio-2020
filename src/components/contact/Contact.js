import React from 'react';

import {
    makeStyles,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    leftPanel: {
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: 500,
        },
    },
    rightPanel: {
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: 500,
        },
    },
    contactBodyContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    contactBody: {
        height: 500,
        maxWidth: 600,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    contactBodyTitle: {
        fontFamily: "'Montserrat', sans-serif",
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    profileImageContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    profileImage: {
        width: '100%',
        maxWidth: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    listRoot: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    listItemText: {
        fontFamily: "'Montserrat', sans-serif",
    },
}));

const ContactList = props => {
    const classes = useStyles();
    const {} = props;

    return (
        <List className={classes.listRoot}>
            <ListItem>
                <ListItemIcon>
                    <AlternateEmailIcon />
                </ListItemIcon>
                <ListItemText 
                    className={classes.listItemText}
                    primary="rtjacobus1@gmail.com"
                    secondary="Shoot me an email"
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TwitterIcon />
                </ListItemIcon>
                <ListItemText
                    className={classes.listItemText}
                    primary="@jacobus_todd"
                    secondary="Tweet me a tweet"
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                    className={classes.listItemText}
                    primary="Todd Jacobus"
                    secondary="Find me on LinkedIn"
                />
            </ListItem>

        </List>
    )
}

const Contact = props => {
    const classes = useStyles();
    const {} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid 
                    item sm={6}
                    className={classes.rightPanel}
                >
                    <div className={classes.profileImageContainer}>
                        <img 
                            src="https://images.ctfassets.net/cfokra459rhp/3iua0FXJDD4vNzpv91jkF2/b1d7616c4d18cca1acd0396330b67dab/bike_illustation.jpg" 
                            alt="Todd Jacobus, profile"
                            className={classes.profileImage} 
                        />
                    </div>
                </Grid>
                <Grid
                    item sm={6}
                    className={classes.leftPanel}
                >
                    <div className={classes.contactBodyContainer}>
                        <div
                            className={classes.contactBody}
                        >
                            <Typography 
                                variant={'h4'}
                                className={classes.contactBodyTitle}
                            >
                                Seriously, let's collaborate
                            </Typography>
                            <ContactList />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Contact;