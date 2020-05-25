import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import HeroPage from './components/HeroPage';
import Projects from './components/projects/Projects';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
    margin: 0
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <HeroPage />
        <Projects />
      </div>
    )
  }
  
}

export default withStyles(styles)(App);
