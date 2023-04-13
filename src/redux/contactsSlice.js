import { createSlice } from '@reduxjs/toolkit';
import { initContacts } from './constants';
import sid from 'shortid';

const contactsSlice = createSlice({
  name: 'user',
  initialState: initContacts,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: sid.generate(),
            name: name,
            number: number,
          },
        };
      },
    },
    removeUser: {
      reducer(state, action) {
        return state.filter(el=>el.id!==action.payload)
      },
    },
  },
});

export const { addUser, removeUser } = contactsSlice.actions; // generate actions
export const contactsReducer = contactsSlice.reducer; //slice reducer
