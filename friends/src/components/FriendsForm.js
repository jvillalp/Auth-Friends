import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import cuid from 'cuid';

const FriendsForm = props => {

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        id:cuid()
    });

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name] : e.target.value
        });
    };

    const handleCreate = e => {
        e.preventDefault();
        console.log('friend', friend)
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => props.friends.push(friend))
        // console.log('this is the create', res)
        .catch(err => console.log("this is a form error",err));
    };
  return (
    <div>
    
      <form>
          <input
          type="text"
          name='name'
          value={friend.name}
          placeholder="Name"
          onChange={handleChanges}
          />
          <input
          type="number"
          name='age'
          value={friend.age}
          placeholder="Age"
          onChange={handleChanges}
          />
          <input
          type="text"
          name='email'
          value={friend.email}
          placeholder="Email"
          onChange={handleChanges}
          />
          <button onClick={handleCreate}> add friend</button>
      </form>
    </div>
  );
};
export default FriendsForm;
