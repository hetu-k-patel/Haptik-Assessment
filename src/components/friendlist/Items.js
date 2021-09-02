import React, { useContext, useEffect, useState } from 'react';
import ActionButtons from './ActionButtons';

import { FriendContext } from '../../context/FriendListContext';

const Items = ({ name }) => {
   const { friendListData } = useContext(FriendContext);
   const [displayData, setDisplayData] = useState([]);

   useEffect(() => {
      const searchedData = friendListData.filter((ele) =>
         ele.name.toLowerCase().startsWith(name.toLowerCase())
      );
      setDisplayData(searchedData);
   }, [name, friendListData]);

   return (
      <div className="friendListItems">
         <ul>
            {displayData.map((data) => (
               <li key={data.id}>
                  <div className="friendListItemsContent">
                     <strong>{data.name}</strong>
                     <br />
                     <span>is your friend</span>
                  </div>
                  <ActionButtons friendId={data.id} isFav={data.isFav} />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Items;
