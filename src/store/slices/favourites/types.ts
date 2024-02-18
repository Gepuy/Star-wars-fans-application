import { IFavourite } from "../../../types";

export interface InitState {
    readonly favourites: ReadonlyArray<IFavourite>;
    readonly count: {
        readonly male: number
        readonly female: number;
        readonly other: number;
        readonly [key: string]: number;
    }
}

export const SLICE  = "favourites";
export const ACTIONS = {
    CLEAR_FAVOURITE: `${SLICE}/clearFavourite`,
    ADD_FAVOURITE: `${SLICE}/addFavourite`,
    REMOVE_FAVOURITE: `${SLICE}/removeFavourite`
};
