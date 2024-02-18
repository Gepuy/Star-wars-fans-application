import { createSlice } from "@reduxjs/toolkit";

import { addFavourite, clearFavourites, removeFavourite } from "./thunk.ts";
import { InitState } from "./types";

const initialState: InitState = {
    favourites: [],
    count: {
        male: 0,
        female: 0,
        other: 0
    }
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(clearFavourites.fulfilled, (state) => {
            return {
                ...state,
                favourites: [],
                count: {
                    male: 0,
                    female: 0,
                    other: 0
                }
            };
        });
        builder.addCase(addFavourite.fulfilled, (state, action) => {
            const newFavorite = action.payload;
            const updatedFavorites = [...state.favourites, newFavorite];

            const updatedCount = {
                male: newFavorite.gender === "male" ? state.count.male + 1 : state.count.male,
                female: newFavorite.gender === "female" ? state.count.female + 1 : state.count.female,
                other: newFavorite.gender === "n/a" ? state.count.other + 1 : state.count.other
            };

            return {
                ...state,
                favourites: updatedFavorites,
                count: updatedCount
            };
        });
        builder.addCase(removeFavourite.fulfilled, (state, action) => {
            const { updatedFavourites, favourite } = action.payload;

            // Update count based on the gender of the removed favorite
            const updatedCount = { ...state.count };
            // eslint-disable-next-line functional/immutable-data
            updatedCount[favourite.gender] -= 1;

            return {
                ...state,
                favourites: updatedFavourites,
                count: updatedCount
            };
        });
    },
});

export default favouritesSlice.reducer;
