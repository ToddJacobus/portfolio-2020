import React from 'react';
import { 
    makeStyles,
    Modal,
    Backdrop,
    Fade,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}))

const GenericModal = props => {
    const classes = useStyles();

    const { 
        children,
        open,
        setModalOpen,
    } = props;


    return (
        <div>
            <Modal
                aria-labelledby="generic-modal-title"
                aria-describedby="generic-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div>
                        { children }
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default GenericModal;