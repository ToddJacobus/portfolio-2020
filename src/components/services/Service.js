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
        index,
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
            height: '100vh',
            flexGrow: 1,
        },
        imageGridItem: {
            width: '100%',
        },
        imageContainer: {
            height: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        image: {
            width: 300,
            height: 300,
            marginLeft: 'auto',
            marginRight: 'auto',
            ...noImageStyle,
        },
        descriptionContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
        },
        tagline: {
            textAlign: 'left',
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 50,
        },
        description: {
            textAlign: 'justify',
            marginLeft: 50,
            marginRight: 50,
        },
    }));

    const classes = useStyles();

    

    return (
        <Grid 
            container 
            spacing={1} 
            className={classes.root}
            direction={
                index % 2 === 0 ? "row" : "row-reverse"
            } 
        >
            <Grid item sm={6} className={classes.imageGridItem}>
                <div className={classes.imageContainer}>
                    <img src={image} alt={title} className={classes.image} />
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className={classes.descriptionContainer}>
                    <Typography variant="h4" className={classes.tagline}>
                        { tagline }
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} >
                        { description }
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
};

export default Service;