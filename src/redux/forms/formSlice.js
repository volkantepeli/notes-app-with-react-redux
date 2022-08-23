import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'notes',
    initialState: {
        items:[{
            id : '1',
            note : 'Pay House',
            color : 'bgYellow'
        }],

    },
    reducers : {
        addNote: (state,action) => {
            state.items.push(action.payload);
        },
    },
})

export const {addNote} = formSlice.actions;
export default formSlice.reducer;