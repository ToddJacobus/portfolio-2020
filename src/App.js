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
import GenericModal from './components/GenericModal';

const styles = {
  root: {
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalChildren: undefined,
    }
  }

  setModalChildren = children => {
    this.setState({
      modalChildren: children,
    })
  };

  setModalOpen = open => {
    this.setState({
      modalOpen: open,
    })
  }

  render () {
    return (
      <div>
        <GenericModal 
          children={this.state.modalChildren}
          open={this.state.modalOpen}
          setModalOpen={this.setModalOpen}
        />
        <Router>
          <div className={this.props.classes.root}>
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/projects">
                <Projects 
                  setModalOpen={this.setModalOpen}
                  setModalChildren={this.setModalChildren}
                />
              </Route>
              <Route path="/">
                <HeroPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
       
    )
  }
  
}

export default withStyles(styles)(App);
