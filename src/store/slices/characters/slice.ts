import { createSlice } from "@reduxjs/toolkit";

import { fetchCharacters } from "./thunk.ts";
import { InitState } from "./types";

const initialState: InitState = {
    characters: [],
    error: null,
    loading: false,
    count: 0,
    next: "",
    previous: ""
};

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCharacters.pending, (state) => {
            return {
                ...state,
                loading: true
            };
        });
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                characters: [...(action.payload?.results || [])],
                count: action.payload?.count || 0,
                next: action.payload?.next || "",
                previous: action.payload?.next || "",
            };
        });
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error.message,
            };
        });
    },
});

export default charactersSlice.reducer;
