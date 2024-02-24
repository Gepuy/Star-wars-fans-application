import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { EGender } from "../enums";

export type ConfigState = {
    readonly API_ROOT: string;
}

export type RootStackParamList = {
    readonly HomeScreen: undefined,
    readonly CharacterDetailsScreen: {
        readonly name: string;
        readonly height?: string;
        readonly mass?: string;
        readonly birthYear?: string;
        readonly eyeColor?: string;
        readonly gender?: EGender;
        readonly skinColor?: string;
    },
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export interface CharactersResponse {
    readonly count: number;
    readonly next: string;
    readonly previous: string;
    readonly results: ReadonlyArray<ICharacter>
}

export interface ICharacter {
    readonly birth_year?: string;
    readonly created: string;
    readonly edited: string;
    readonly eye_color?: string;
    readonly films?: ReadonlyArray<string>;
    readonly gender: EGender;
    readonly hair_color?: string;
    readonly height?: string;
    readonly homeworld?: string;
    readonly mass: string;
    readonly name: string;
    readonly skin_color?: string;
    readonly species?: ReadonlyArray<string>;
    readonly starships?: ReadonlyArray<string>;
    readonly url: string;
}

export interface IFavourite {
    readonly id: string;
    readonly gender: string;
}
