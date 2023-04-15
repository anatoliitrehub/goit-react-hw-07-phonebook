import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://643865c71b9a7dd5c9508ade.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_,thunkAPI)=>{
    try{
    const resp = await axios.get("/contacts");
    return resp.data;
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addUser = createAsyncThunk("contacts/addUser", async (user,thunkAPI)=>{
    try{
        const resp = await axios.post("/contacts", user);
        return resp.data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const removeUser = createAsyncThunk("contacts/removeUser", async (id,thunkAPI)=>{
    try{
        const resp = await axios.delete(`/contacts/${id}`).then(()=>id);
        return resp
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})