import React from 'react'

import {
    makeStyles, Typography
} from '@material-ui/core';

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
}))

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
            <div className={classes.bodyContainer}>
                {/* <RenderContentfulRichText text={body} assets={linkedAssets}/> */}
                {RenderContentfulRichText(item.body, linkedAssets)}
            </div>
        </div>
    )
}

export default Project;