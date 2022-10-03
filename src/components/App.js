import './App.css';
import Navbar from './Nav/Nav';
import Home from './Home';
import Work from './Work';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (    
      <Router>
        <div className='page'>
          <div id="nav-container">
            <Navbar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
