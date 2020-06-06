import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HeroPage from './components/HeroPage';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const styles = {
  root: {
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
      <Router>
        <div className={this.props.classes.root}>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <HeroPage />
            </Route>
          </Switch>
        </div>
      </Router>  
    )
  }
  
}

export default withStyles(styles)(App);
