import { createAsyncThunk } from "@reduxjs/toolkit";

import { FAVOURITES_KEY, IFavourite } from "../../../types";
import { getDataFromStorage, setDataToStorage } from "../../../utils";

export const clearFavourites = createAsyncThunk(
    "favourites/clearFavourite",
    async () => {
        await setDataToStorage(FAVOURITES_KEY, []);
        return [];
    },
);

export const addFavourite = createAsyncThunk(
    "favourites/addFavourite",
    async (favourite: IFavourite, { rejectWithValue }) => {
        const favourites = await getDataFromStorage<ReadonlyArray<IFavourite>>(FAVOURITES_KEY);
        if (!favourites) {
            return rejectWithValue("Favourites don't exist in AsyncStorage");
        }

        await setDataToStorage(FAVOURITES_KEY, [...favourites, favourite]);

        return favourite;
    },
);

export const removeFavourite = createAsyncThunk(
    "favourites/removeFavourite",
    async (id: string, { rejectWithValue }) => {
        const favourites = await getDataFromStorage<ReadonlyArray<IFavourite>>(FAVOURITES_KEY);

        if (!favourites) {
            return rejectWithValue("Favourites don't exist in AsyncStorage");
        }

        const updatedFavourites: Array<IFavourite> = favourites.filter(
            favourite => favourite.id !== id,
        );

        await setDataToStorage(FAVOURITES_KEY, updatedFavourites);

        return updatedFavourites;
    },
);
