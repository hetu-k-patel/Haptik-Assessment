import React, { useContext } from 'react';

import { FriendContext } from '../../context/FriendListContext';
import { UPDATE_FAV, UPDATE_NAME, DELETE_DATA } from '../../constants/ActionTypes';
import Popup from './Popup';

const ActionButtons = ({ friendId, isFav }) => {
   const { friendListDispatch } = useContext(FriendContext);

   const handleFav = (id) => {
      friendListDispatch({ type: UPDATE_FAV, id });
   };

   const handleDelete = (id) => {
      friendListDispatch({ type: DELETE_DATA, id });
   };

   const handleEdit = (id) => {
      const editedName = prompt('Update your friend name...');
      if (!editedName) return;
      friendListDispatch({ type: UPDATE_NAME, id, editedName });
   };

   return (
      <div className="friendListItemsActions">
         <button onClick={() => handleFav(friendId)}>
            <i className="material-icons">{isFav ? 'star' : 'star_outline'}</i>
         </button>
         <button onClick={() => handleEdit(friendId)}>
            <i className="material-icons">edit</i>
         </button>
         <button onClick={() => handleDelete(friendId)}>
            <i className="material-icons">delete</i>
         </button>
      </div>
   );
};

export default ActionButtons;
