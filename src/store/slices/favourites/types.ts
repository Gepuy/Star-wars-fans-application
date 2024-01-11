import { IFavourite } from "../../../types";

export interface InitState {
    readonly favourites: ReadonlyArray<IFavourite>;
}
