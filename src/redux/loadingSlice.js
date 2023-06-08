import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false
    },
    reducers: {
        setLoadingTrue: (state, action) => {
            state.loading = true;
        },
        setLoadingFalse: (state, action) => {
            state.loading = false;

        },

    },
});

export const {
    setLoadingTrue,
    setLoadingFalse,
} = loadingSlice.actions;

export default loadingSlice.reducer;
export const selectLoading = (state) => {
    return state.loading.loading;
};