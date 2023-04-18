import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import axios from 'axios';

axios.defaults.baseURL = 'https://64383f08f3a0c40814ae5144.mockapi.io';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: values.name,
        phone: values.phone,
      });
      Notiflix.Notify.success(`${values.name} added to contact books`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      Notiflix.Notify.info(`The contact deleted`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


