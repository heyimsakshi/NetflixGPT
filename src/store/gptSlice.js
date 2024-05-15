import { createSlice } from "@reduxjs/toolkit";
const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptSeach:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSeach=!state.showGptSeach;
        },
    },

});

export const {toggleGptSearchView}= gptSlice.actions

export default gptSlice.reducer