import React from 'react';
import { connect } from 'react-redux';

import ReCAPTCHA from 'react-google-recaptcha';

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
    thanksContainer: {
        height: 250,
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'justify',
        backgroundColor: 'white',
    },
    thanks: {
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))

const recaptchaRef = React.createRef();

const Thanks = props => {
    const classes = useStyles();
    return (
        <div className={classes.thanksContainer}>
            <Typography className={classes.thanks}>
                Thanks for reaching out! I will get back to you soon via
                 email.
            </Typography>
        </div>
    )
};

const ContactForm = props => {
    const { 
        sendContact,
        setModalOpen,
        setModalChildren,
    } = props;
    const classes = useStyles();

    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [comments, setComments] = React.useState();

    const handleSubmit = e => {
        e.preventDefault()

        recaptchaRef.current.execute();

        sendContact({data: {
            email,
            name,
            comments,
        }})

        setModalOpen(false);
        setModalChildren(
            <Thanks />
            )
        setModalOpen(true)

    };

    const handleCaptchaChange = captchaResponse => {
        console.log("captcha response", captchaResponse)
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
                <ReCAPTCHA 
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc_q70ZAAAAANxJqRn5qk44PGoppd9Eh4WWkOCA"
                    onChange={handleCaptchaChange}
                />
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