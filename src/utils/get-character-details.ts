import { EGender } from "../types";

interface IDetails {
    readonly name: string;
    readonly height?: string;
    readonly mass?: string;
    readonly birthYear?: string;
    readonly eyeColor?: string;
    readonly gender?: EGender;
    readonly skinColor?: string;
}

interface IDetailField {
    readonly key: keyof IDetails;
    readonly title: string;
}

export const getCharacterDetails = (details: IDetails, fields: readonly IDetailField[]): ReadonlyArray<{ readonly value: string; readonly title: string }> => {
    return fields.map((field) => ({
        value: details[field.key] || "N/A",
        title: field.title,
    }));
};

export const fieldsToShow: ReadonlyArray<IDetailField> = [
    { key: "name", title: "Name:" },
    { key: "height", title: "Height:" },
    { key: "mass", title: "Mass:" },
    { key: "birthYear", title: "Birth year:" },
    { key: "eyeColor", title: "Eye color:" },
    { key: "gender", title: "Gender:" },
    { key: "skinColor", title: "Skin color:" },
];
