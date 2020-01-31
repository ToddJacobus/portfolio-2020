import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
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
                Greetings from the Hero Page!
            </div>
        )
    }

}

export default withStyles(styles)(HeroPage);