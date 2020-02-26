import React from 'react';
import './App.css';

//router
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from '../src/components/Login';
import FriendsList from '../src/components/FriendsList';

//privateRoute
import PrivateRoute from '../src/components/PrivateRoute';
import FriendsForm from './components/FriendsForm';


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <Link to="/login">Login</Link>
       
          <Link to="/friendsList">Friends List</Link>
        
          {/* <Link to="/friendsForm">Friends Form</Link> */}
       </nav>
      <Switch>
        <PrivateRoute exact path="/friendsList" component={FriendsList} />
        <PrivateRoute  exact path="/friendsForm" component={FriendsForm}/>

      <Route path='/login' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
