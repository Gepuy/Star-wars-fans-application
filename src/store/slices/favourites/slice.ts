import { createSlice } from "@reduxjs/toolkit";

import { addFavourite, clearFavourites, removeFavourite } from "./thunk.ts";
import { InitState } from "./types";

const initialState: InitState = { favourites: [] };

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(clearFavourites.fulfilled, (state) => {
            // eslint-disable-next-line functional/immutable-data
            state.favourites = [];
        });

        builder.addCase(addFavourite.fulfilled, (state, action) => {
            // eslint-disable-next-line functional/immutable-data
            state.favourites.push(action.payload);
        });

        builder.addCase(removeFavourite.fulfilled, (state, action) => {
            const favourites = action.payload;

            return { ...state, favourites };
        });
    },
});

export default favouritesSlice.reducer;
