import './App.css';
import './Nav.css';
import './Footer.css';
import './Home.css';
import './About.css';
import './Projects.css';
import './PotionIngredients.css';

import Navbar from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import PotionIngredients from './PotionIngredients';
import Error from './Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (    
      <Router>
        <div className="webpage_container">          
          <Switch>
            <Route exact path="/"> 
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/about">
              <Navbar />
              <About />
            </Route>
            <Route exact path="/projects">
              <Navbar />
              <Projects />
            </Route>
            <Route exact path="/potionomics">
              <div className='potion_page'>
                <PotionIngredients />
              </div>
            </Route>
            <Route path="/*">
              <Navbar />
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
