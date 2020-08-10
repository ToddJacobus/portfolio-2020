import React from 'react';
import { connect } from 'react-redux';

import {
    makeStyles, 
    FormControl, 
    InputLabel, 
    Input, 
    FormHelperText, 
    TextField, 
    Button,
    Typography,
} from '@material-ui/core';

import {
    sendContact,
} from '../../actions';

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
    const { sendContact } = props;
    const classes = useStyles();

    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [comments, setComments] = React.useState();

    const handleSubmit = e => {
        e.preventDefault()

        sendContact({data: {
            email,
            name,
            comments,
        }})
    };

    return (
        <div className={classes.root}>
            <form onSubmit={e => handleSubmit(e)} className={classes.formRoot} >
                <FormControl required className={classes.formControl} >
                    <InputLabel htmlFor="email-input" >Email Address</InputLabel>
                    <Input 
                        id="email-input" 
                        aria-describedby="email-helper-text" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormHelperText id="email-helper-text" >
                        I'll never share your email
                    </FormHelperText>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-input" >Name</InputLabel>
                    <Input 
                        id="name-input" 
                        aria-describedby="name-helper-text" 
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>
                <div className={classes.textFieldContainer}>
                    <TextField 
                        id="comments-field"
                        label="How can I help?"
                        multiline
                        onChange={e => setComments(e.target.value)}
                    />    
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        contacts_response: state.contacts_response,
    }
}

export default connect(
    mapStateToProps,
    {
        sendContact,
    }
)(ContactForm);