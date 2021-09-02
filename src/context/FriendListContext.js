import { createContext } from 'react';

import {
   ADD_DATA,
   FETCH_DATA,
   UPDATE_FAV,
   UPDATE_NAME,
   DELETE_DATA,
} from '../constants/ActionTypes';
import { addToLocalStorage, getFromLocalStorage } from '../storage/index';

export const FriendContext = createContext();
export const Provider = FriendContext.Provider;

export function FriendsListReducer(state, action) {
   let result = state;
   switch (action.type) {
      case ADD_DATA:
         result = [action.payload, ...state];
         break;

      case FETCH_DATA:
         return getFromLocalStorage();

      case UPDATE_FAV: {
         const index = state.findIndex((ele) => ele.id === action.id);
         state[index].isFav = !state[index].isFav;
         result = [...state.sort((a, b) => b.isFav - a.isFav)];
         break;
      }

      case UPDATE_NAME: {
         const index = state.findIndex((ele) => ele.id === action.id);
         state[index].name = action.editedName;
         result = [...state];
         break;
      }

      case DELETE_DATA: {
         result = state.filter((ele) => ele.id !== action.id);
         break;
      }

      default:
         result = state;
   }

   addToLocalStorage(result);
   return result;
}
