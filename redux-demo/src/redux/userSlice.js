import { createSlice ,nanoid} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        ADD_USER(state,action){
            console.log("Add user called")
            console.log(action.payload)
            state.users.push({...action.payload, id:nanoid()})
            // state.users.push({...action.payload, id:Date.now()})
        },
        REMOVE_USER:(state,action)=>{
            console.log(action.payload)
            state.users.splice(action.payload,1)
        },
        REMOVE_ALL_USERS(state,action){
            state.users=[]
        }
    }
})

console.log(userSlice.actions)
export const {ADD_USER,REMOVE_ALL_USERS,REMOVE_USER}=userSlice.actions
export default userSlice

export const selectUsers=(state)=>state.user.users