import './App.css';
import './Nav.css';
import './Footer.css';
import './Home.css';
import './About.css';
import './Projects.css';
import './Error.css';

import Navbar from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Error from './Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (    
      <Router>
        <div className="webpage_container">
          <Navbar />
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="/*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
