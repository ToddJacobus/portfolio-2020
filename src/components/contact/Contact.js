import React from 'react';

import {
    makeStyles,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Fab,
    Button,
} from '@material-ui/core';
import { Link as MuiLink } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';

import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1200,
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
        textAlign: 'justify',
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
    chatButtonContainer: {
        width: '100%',
        textAlign: 'center',
    },
    chatButton: {
        // width: 50,
    },
}));

const ContactList = props => {
    const classes = useStyles();
    const {} = props;

    return (
        <div className={classes.listRoot}>
            <Typography variant="h6">
                You can also find my on socail media
            </Typography>
            <List>
                {/* <ListItem>
                    <ListItemIcon>
                        <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText 
                        className={classes.listItemText}
                        primary="rtjacobus1@gmail.com"
                        secondary="Shoot me an email"
                    />
                </ListItem> */}
                <ListItem>
                    <ListItemIcon>
                        <TwitterIcon />
                    </ListItemIcon>
                    <ListItemText
                        className={classes.listItemText}
                        // primary="@jacobus_todd"
                        primary={
                            <MuiLink
                                href="https://twitter.com/jacobus_todd"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @jacobus_todd   
                            </MuiLink>
                        }
                        secondary="Tweet me a tweet"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText
                        className={classes.listItemText}
                        primary={
                                <MuiLink 
                                    href="https://www.linkedin.com/in/connect-with-todd-jacobus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Todd Jacobus
                                </MuiLink>
                            }
                        secondary="Connect with me on LinkedIn"
                    />
                </ListItem>

            </List>    
        </div>
        
    )
}

const Contact = props => {
    const classes = useStyles();
    const { 
        setModalChildren,
        setModalOpen,
        modalOpen,
     } = props;

    const handleButtonClick = e => {
        setModalChildren(
            <ContactForm />
        )
        modalOpen ? setModalOpen(false) : setModalOpen( true )
    }

    return (
        <div className={classes.root}>
            <Fab
                size="small"
                className={classes.homeActionButton}
                component={Link}
                to="/"
            >
                <HomeIcon />
            </Fab>
            <Grid container spacing={2}>
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
                                variant={'h6'}
                                className={classes.contactBodyTitle}
                            >
                                Let's work together to reduce barriers 
                                between your products, services and 
                                those who need them.
                            </Typography>
                            <div className={classes.chatButtonContainer}>
                                <Button
                                    onClick={e => handleButtonClick(e)}
                                    classname={classes.chatButton}
                                    color="primary"
                                    variant="contained"
                                >
                                    Let's Chat
                                </Button>
                            </div>
                            
                            <ContactList />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Contact;