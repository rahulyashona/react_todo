// import './App.css';
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import TaskDetail from './TaskDetail';


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
            <Route path="/task/:id"> 
              <TaskDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
