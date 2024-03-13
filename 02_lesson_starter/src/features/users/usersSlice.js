import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0' , name:'Dedo the Zebo'},
    {id:'1' , name:'Fero the Efenim'},
    {id:'2' , name:'Egay the Boc'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;