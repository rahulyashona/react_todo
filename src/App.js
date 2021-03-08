// import './App.css';
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import TaskDetail from './TaskDetail';
import NotFound from './NotFound';
// import EditTask from './EditTask';


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
            {/* <Route path='/edit/:id'>
              <EditTask />
            </Route> */}
            <Route path="*"> 
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
