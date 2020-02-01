import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Typography } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
    },
    leftPanel: {
        height: '100vh',
    },
    heroImage: {
        position: 'relative',
        height: '100vh',
        left: 0,
        margin: 0,
        padding: 0
    }
}

class HeroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div>
                    <div className={this.props.classes.leftPanel}>
                        <img className={this.props.classes.heroImage} src="https://res.cloudinary.com/dhojr410t/image/upload/v1580565491/botanic_gardens-9076_xljz4o.jpg"/>
                    </div>
                    <Typography variant="h1">
                        Todd Jacobus
                    </Typography>
                </div>
                <div>
                    right half
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(HeroPage);