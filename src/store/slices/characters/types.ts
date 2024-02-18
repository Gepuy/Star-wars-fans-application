import { ICharacter } from "../../../types";

export interface InitState {
    readonly characters: ReadonlyArray<ICharacter>;
    readonly loading: boolean;
    readonly error: unknown;
    readonly count: number;
    readonly next: string;
    readonly previous: string;
}

export const ACTIONS = { FETCH_CHARACTERS: "characters/fetchCharacters" }
