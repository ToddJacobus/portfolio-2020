import React from 'react';

import { 
    makeStyles,
} from '@material-ui/core/styles';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { 
    Card,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    embeddedAssetContainer: {
        // width: '66%',
        // maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        marginBottom: 50,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    embeddedAsset: {
        width: '100%',
        height: 'auto',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        // boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
    },
    subtitleContainer: {
        textAlign: 'justify',
    },
    subtitle: {

    },
    iframeContainer: {
        width: '100%',
        height: 700,
        maxWidth: 1200,
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        borderRadius: 5,
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
    },
}))

const RenderContentfulRichText = (text, assets) => {
    const classes = useStyles();

    const richTextOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                if (assets) {
                    const asset = assets.find( asset => asset.sys.id === node.data.target.sys.id)
                    const mimeType = asset.fields.file.contentType
                    switch (mimeType.split('/')[0]) {
                        case 'image':
                            return (
                                <div className={classes.embeddedAssetContainer}>
                                    <Grid container spacing={6}>
                                        <Grid item sm={6} className={classes.subtitleContainer}>
                                            <Typography 
                                                variant="subtitle1" 
                                                className={classes.subtitle}
                                            >
                                                {asset.fields.description}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <div className={classes.imageContainer}>
                                                <img 
                                                    className={classes.embeddedAsset}
                                                    src={asset.fields.file.url}
                                                    alt={asset.fields.title}
                                                />
                                            </div>
                                            
                                        </Grid>
                                    </Grid>
                                    
                                </div>
                            )
                            
                        case 'video':
                            return (
                                <div className={classes.embeddedAssetContainer}>
                                    <video 
                                        className={classes.embeddedAsset}  
                                        controls
                                    >
                                        <source 
                                            src={asset.fields.file.url} 
                                            type={mimeType}
                                        />
                                            Your browser does not support video
                                    </video>  
                                </div>
                            )
                        case 'application':
                            return (
                                <div className={classes.iframeContainer}>
                                        <iframe 
                                            src={asset.fields.file.url} 
                                            width="100%"
                                            height="100%"
                                            title="PDF document"
                                        ></iframe>
                                </div>
                            )
                        default:
                            break;
                }
                
                }
            },
            [INLINES.HYPERLINK]: (node, next) => {
                
                return (
                    <a 
                        href={node.data.uri} 
                        rel="noopener noreferrer"
                    >
                            {next[0]}
                    </a>
                )
            }
        }
    }
    return documentToReactComponents(text, richTextOptions)
};

export default RenderContentfulRichText;