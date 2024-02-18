import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCharactersData } from "../../../managers/characters-manager.ts";

import { ACTIONS } from "./types.ts";


export const fetchCharacters = createAsyncThunk(
    ACTIONS.FETCH_CHARACTERS,
    async (_, { rejectWithValue }) => {
        try {
            return await getCharactersData();
        } catch (e) {
            rejectWithValue(e);
        }
    },
);
