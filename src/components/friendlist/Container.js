import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getFromLocalStorage } from '../../storage/index';
import { Provider, FriendsListReducer } from '../../context/FriendListContext';
import { ADD_DATA } from '../../constants/ActionTypes';
import Items from './Items';
import Popup from './Popup';
import './styles.css';

const Container = () => {
   const [friendName, setFriendName] = useState('');
   const [isOpen, setIsOpen] = useState(false);
   const [children, setChildrem] = useState('');

   const [friendListData, friendListDispatch] = useReducer(
      FriendsListReducer,
      getFromLocalStorage() || []
   );

   const toggleModal = (component) => {
      if (component) {
         setChildrem(component);
      }
      setIsOpen((prev) => !prev);
   };

   const handleInput = () => {
      const value = friendName;
      setFriendName('');

      if (!value) return;
      const friendData = {
         id: uuidv4(),
         name: value,
         isFav: false,
      };

      friendListDispatch({ type: ADD_DATA, payload: friendData });
   };

   return (
      <div className="friendListContainer">
         <div className="title">
            <h1>Friends List</h1>
         </div>
         <div className="searchBox">
            <input
               type="text"
               value={friendName}
               placeholder="Enter your friend's name..."
               onChange={(e) => setFriendName(e.target.value)}
               onKeyUp={(e) => (e.key === 'Enter' ? handleInput() : null)}
            />
         </div>
         <div className="friendlist-items-wrapper">
            <Provider value={{ friendListData, friendListDispatch, toggleModal }}>
               <Items name={friendName} />
            </Provider>
         </div>
         <Popup open={isOpen} onClose={toggleModal} children={children} />
      </div>
   );
};

export default Container;
