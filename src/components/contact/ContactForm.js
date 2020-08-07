import React from 'react';

import {
    makeStyles, FormControl, InputLabel, Input, FormHelperText, TextField, Button,

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
            width: '25ch',
        },
    },
    formControl: {
        '& .MuiFormControl-root': {
            width: '100%',
        },
    },
    textFieldContainer: {
        marginTop: 15,
    },
    buttonContainer: {
        textAlign: "center",
    },
    button: {
        marginTop: 100,
    },
}))

const ContactForm = props => {
    const {} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.formRoot} >
                <FormControl required className={classes.formControl} >
                    <InputLabel htmlFor="email-input" >Email Address</InputLabel>
                    <Input id="email-input" aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text" >
                        I'll never share your email
                    </FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email-input" >Name</InputLabel>
                    <Input id="name-input" aria-describedby="name-helper-text" />
                </FormControl>
                <div className={classes.textFieldContainer}>
                    <TextField 
                        id="comments-field"
                        label="How can I help?"
                        multiline
                    />    
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;