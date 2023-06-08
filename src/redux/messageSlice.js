import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        message: "",
        status: ""
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message
            state.status = action.payload.status
        },
        setMessageClose: (state, action) => {
            state.message = ""
            state.status = ""

        },

    },
});

export const {
    setMessage,
    setMessageClose,
} = messageSlice.actions;

export default messageSlice.reducer;
export const selectMessage = (state) => {
    return state.message.message;
};
export const selectStatusMessage = (state) => {
    return state.message.status;
};