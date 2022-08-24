import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'notes',
    initialState: {
        items:[{
            id : '1',
            note : 'You can choose a color according to the importance and keep a note.',
            color : 'bgRed'
        }],

    },
    reducers : {
        addNote: (state,action) => {
            state.items.push(action.payload);
        },
        deleteNote: (state, action) => {
            const id = action.payload; 
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
          },
    },
})

export const {addNote,deleteNote} = formSlice.actions;
export default formSlice.reducer;