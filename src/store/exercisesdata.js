import {createSlice} from "@reduxjs/toolkit";
const intialstate={
    searchedexercises:[],
    bodyparts:[]
}
const searchedexercises=createSlice({
    name:"bodyparts",
    initialState:intialstate,
    reducers:{
searchedexercises(state,action){
    console.log(action.payload,action.payload.length)
    state.searchedexercises=action.payload
    // console.log(state.bodyparts.length)
},
bodyparts(state,action){
    // console.log(typeof action.payload)
    // console.log(typeof state.bodyparts)
state.bodyparts=action.payload

}
    }
})
export const searchedexercisesactions=searchedexercises.actions
export default searchedexercises