import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{state.value +=1},
        decrement:(state)=>{state.value -=1}
    }
})
const themeslice = createSlice({
    name:'theme',
    initialState:{color:'yellow'},
    reducers:{
     setTheme: (state) => {
    state.color = state.color === 'yellow' ? 'black' : 'yellow';
}
    }
})
export const{increment,decrement} = counterSlice.actions;
export const{setTheme} = themeslice.actions;
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        theme:themeslice.reducer
    }
})
export default store