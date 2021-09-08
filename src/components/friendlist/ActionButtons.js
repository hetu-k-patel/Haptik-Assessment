import React, { useContext } from 'react';

import { FriendContext } from '../../context/FriendListContext';
import { UPDATE_FAV, UPDATE_NAME, DELETE_DATA } from '../../constants/ActionTypes';

const ActionButtons = ({ friendId, isFav }) => {
   const { friendListDispatch, toggleModal } = useContext(FriendContext);

   const handleFav = (id) => {
      friendListDispatch({ type: UPDATE_FAV, id });
   };

   const handleDelete = (id) => {
      toggleModal(() => DeleteModel(id));
   };

   const deleteData = (id) => {
      friendListDispatch({ type: DELETE_DATA, id });
      toggleModal();
   };

   const handleEdit = (id) => {
      const editedName = prompt('Update your friend name...');
      if (!editedName) return;
      friendListDispatch({ type: UPDATE_NAME, id, editedName });
   };

   const DeleteModel = (id) => {
      return (
         <div className="deletePopup">
            <div className="modalTitle">
               <h1>Are you sure?</h1>
            </div>
            <div className="modalActionButtons">
               <button onClick={() => deleteData(id)}>Yes</button>
               <button onClick={toggleModal}>No</button>
            </div>
         </div>
      );
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
