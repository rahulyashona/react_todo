// import './App.css';
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Detail from './Detail';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>  
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
            <Route path="/detail"> 
              <Detail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
