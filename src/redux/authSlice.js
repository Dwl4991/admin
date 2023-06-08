import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userData: {}
    },
    reducers: {
        setToken: (state, action) => {
            const { token } = action.payload;
            state.token = token;
        },
        setUserData: (state, action) => {
            state.userData = {...action.payload};
        },

        setLogout: (state, action) => {
            state.token = null;
            state.userData = {};
        },
    },
});

export const {
    setToken,
    setUserData,
    setLogout,
} = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentToken = (state) => {
    return state.auth.token;
};
export const selectCurrentUserdata = (state) => {
    return state.auth.userData;
};