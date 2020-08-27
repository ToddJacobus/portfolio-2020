import React, { Component } from 'react';

import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HeroPage from './components/HeroPage';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import GenericModal from './components/GenericModal';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Hind"',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#3B8DBF",
      light: "#89BAD9",
    },
    secondary: {
      main: "#8C031C",
    }
  },
});

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
          <div>
            <Switch>
              <Route path="/contact">
                <Contact 
                  setModalChildren={this.setModalChildren}
                  setModalOpen={this.setModalOpen}
                  modalOpen={this.state.modalOpen}
                />
              </Route>
              <Route path="/projects">
                <Projects 
                  setModalOpen={this.setModalOpen}
                  setModalChildren={this.setModalChildren}
                />
              </Route>
              <Route path="/services">
                  <Services />
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

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

// export default withStyles(styles)(App);
