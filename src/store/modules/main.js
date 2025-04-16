import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name:'main',
    initialState:{
        isFixed:true,
        topAlpha:false
    },
    reducers:{
        changeMainIsFixed(state,{payload}){
            state.isFixed=payload
        },
        changeMainTopAlpha(state,{payload}){
            state.topAlpha=payload
        }
    }
})
export const {changeMainIsFixed,changeMainTopAlpha} = mainSlice.actions
export default mainSlice.reducer