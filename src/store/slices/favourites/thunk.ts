import { createAsyncThunk } from "@reduxjs/toolkit";

import { FAVOURITES_KEY, IFavourite } from "../../../types";
import { getDataFromStorage, setDataToStorage } from "../../../utils";

import { ACTIONS } from "./types.ts";

export const clearFavourites = createAsyncThunk(
    ACTIONS.CLEAR_FAVOURITE,
    async () => {
        await setDataToStorage(FAVOURITES_KEY, []);
    },
);

export const addFavourite = createAsyncThunk(
    ACTIONS.ADD_FAVOURITE,
    async (favourite: IFavourite, { rejectWithValue }) => {
        const favourites = await getDataFromStorage<ReadonlyArray<IFavourite>>(FAVOURITES_KEY);
        if (!favourites) {
            await setDataToStorage(FAVOURITES_KEY, []);
        }

        await setDataToStorage(FAVOURITES_KEY, [...favourites as ReadonlyArray<IFavourite>, favourite]);

        return favourite;
    },
);

export const removeFavourite = createAsyncThunk(
    ACTIONS.REMOVE_FAVOURITE,
    async (favourite: IFavourite, { rejectWithValue }) => {
        const favourites = await getDataFromStorage<ReadonlyArray<IFavourite>>(FAVOURITES_KEY);

        if (!favourites) {
            return rejectWithValue("Favourites don't exist in AsyncStorage");
        }

        const updatedFavourites: ReadonlyArray<IFavourite> = favourites.filter(
            item => item.id !== favourite.id,
        );

        await setDataToStorage(FAVOURITES_KEY, updatedFavourites);

        return { updatedFavourites, favourite };
    },
);
