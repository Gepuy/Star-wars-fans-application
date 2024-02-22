import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCharactersData } from "../../../managers/characters-manager.ts";

import { ACTIONS } from "./types.ts";


export const fetchCharacters = createAsyncThunk(
    ACTIONS.FETCH_CHARACTERS,
    async (page: number = 1, { rejectWithValue }) => {
        try {
            return await getCharactersData(page);
        } catch (e) {
            rejectWithValue(e);
        }
    },
);
