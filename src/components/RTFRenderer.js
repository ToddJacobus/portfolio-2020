import React from 'react';

import { 
    makeStyles,
} from '@material-ui/core/styles';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    Grid,
    Typography,
} from '@material-ui/core';

import GenericModal from '../components/GenericModal';

const useStyles = makeStyles(theme => ({
    embeddedAssetContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
        marginBottom: 100,
        paddingTop: 50,
        paddingBottom: 50,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        borderTop: '1px solid #3B8DBF',
        borderBottom: '1px solid #3B8DBF',
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
    },
    modalImageContainer: {
        textAlign: 'center',
    },
    modalImage: {
        borderRadius: 5,
        maxWidth: '90%',
    },
    subtitleContainer: {
        textAlign: 'justify',
    },
    subtitle: {
        fontFamily: "'Montserrat', sans-serif",
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

    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalChildren, setModalChildren] = React.useState();

    const handleModalOpen = children => {
        setModalOpen(true);
        setModalChildren(children)
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    

    const richTextOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                if (assets) {
                    const asset = assets.find( asset => asset.sys.id === node.data.target.sys.id)
                    const mimeType = asset.fields.file.contentType
                    switch (mimeType.split('/')[0]) {
                        case 'image':
                            return (
                                <div 
                                    className={classes.embeddedAssetContainer}
                                >
                                    <GenericModal
                                        children={modalChildren}
                                        open={modalOpen}
                                        handleModalClose={handleModalClose}
                                    />
                                    <Grid container spacing={6}>
                                        <Grid item sm={6}>
                                            <div 
                                                className={classes.imageContainer}
                                            >
                                                <img 
                                                    className={classes.embeddedAsset}
                                                    src={asset.fields.file.url}
                                                    alt={asset.fields.title}
                                                    onClick={() => handleModalOpen(
                                                        <div className={classes.modalImageContainer}>
                                                            <img 
                                                                className={classes.modalImage}
                                                                src={asset.fields.file.url} 
                                                                alt={asset.fields.title} 
                                                            />
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={6} className={classes.subtitleContainer}>
                                            <Typography 
                                                variant="subtitle1" 
                                                className={classes.subtitle}
                                            >
                                                {asset.fields.description}
                                            </Typography>
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