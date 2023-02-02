import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './requests';
import { logIn } from './auth/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [logIn.pending](state) {
      state.items = [];
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
