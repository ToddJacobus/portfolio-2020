import React from 'react';

import {
    makeStyles, FormControl, InputLabel, Input, FormHelperText, TextField,

} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        width: 300,
        height: 450,
        padding: 25,
    },
    formRoot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const ContactForm = props => {
    const {} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.formRoot} required >
                <InputLabel htmlFor="email-input" >Email Address</InputLabel>
                <Input id="email-input" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text" >
                    I'll never share your email
                </FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input" >Name</InputLabel>
                <Input id="name-input" aria-describedby="name-helper-text" />
            </FormControl>
            <form className={classes.formRoot} >
                <TextField 
                    id="comments-field" 
                    variant="outlined"
                    label="Comments"
                    defaultValue="How can I help you meet your business goals?"
                />
            </form>

        </div>
    )
};

export default ContactForm;