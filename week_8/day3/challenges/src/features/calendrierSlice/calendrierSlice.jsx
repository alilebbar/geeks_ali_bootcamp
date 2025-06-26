import { createSlice } from '@reduxjs/toolkit'  

const initialState = []

const calendrierSlice = createSlice({
    name : "calendrier",
    initialState,
    reducers:{
        addEvent(state,action){
            state.push({
                id:state.length,
                evenement:action.payload.evenement,
                date:action.payload.date
            })
            console.log(state)
        },
        deleteEvent(state,action){
            console.log(action.payload.id)
            const index = state.findIndex((e)=>e.id===action.payload.id)
            console.log(index)
            if(index===-1)return
            state.splice(index,1)
        },
        deleteAll(state,action){
            state.length = 0;
        },
        editEvent(state,action){
            const index = state.findIndex((e)=>e.id===action.payload.id)
            if(index===-1)return
            state[index]={...state[index],evenement:action.payload.evenement}
        }
    }
})

export const {addEvent,editEvent,deleteEvent,deleteAll} = calendrierSlice.actions
export default calendrierSlice.reducer