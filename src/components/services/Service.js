import React from 'react';

import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

import {
    Link,
} from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: "100%",
//     },
//     imageContainer: {
//         height: 300,
//         border: 
//     },
//     image: {},
//     descriptionContainer: {},
//     description: {},
// }));

const Service = props => {
    const { 
        id,
        title,
        tagline,
        description,
        image,
        order,
     } = props;

    // Control placeholder for image if there's nothing there
    const [noImageStyle, setNoImageStyle] = React.useState();
    React.useEffect(() => {
        image ? setNoImageStyle({}) : setNoImageStyle({
            // TODO: write some classy css for a image placeholder
            border: "1px dashed red",
        })
    }, [image])

    const useStyles = makeStyles(theme => ({
        root: {
            // width: "100%",
            flexGrow: 1,
        },
        imageContainer: {
            height: 300,
            textAlign: 'center',
            ...noImageStyle,
        },
        image: {},
        descriptionContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
        },
        description: {
            textAlign: 'justify',
            marginLeft: 50,
            marginRight: 50,

        },
    }));

    const classes = useStyles();

    

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item sm={6}>
                <div className={classes.imageContainer}>
                    <img src={image} alt={title} className={classes.image} />
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className={classes.descriptionContainer}>
                    <Typography variant="h6" className={classes.description} >
                        { description }
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
};

export default Service;