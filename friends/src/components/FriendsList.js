import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import cuid from 'cuid';

import {link} from 'react-router-dom'
//components
import FriendsForm from "./FriendsForm";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }
    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
        .get('/api/friends/')
        .then(res => {
            this.setState({
                friends: res.data
                // (console.log('this is friends',res.data))
            })
            
        })
        .catch(err => console.log('this is not okay', err));
    }
    render(){
  return (
    <div>
      {this.state.friends.map(data => {
          return (
              <div key={cuid()}>
              <h2>{data.name}</h2>
              <h4>{data.age}</h4>
              <h3>{data.email}</h3>
              </div>
          )
      })}
      <FriendsForm friends={this.state.friends}/>
    </div>
  );
    }
};
export default FriendsList;
