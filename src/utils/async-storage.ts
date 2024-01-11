import AsyncStorage from "@react-native-async-storage/async-storage";

import { errorService } from "../services";

export async function getDataFromStorage<ReturnValue>(key: string) {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? (JSON.parse(value) as ReturnValue) : null;
    } catch (e) {
        errorService.handle(e as string);
    }
}

export async function setDataToStorage(key: string, value: unknown) {
    try {
        const stringifiedValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringifiedValue);
    } catch (e) {
        errorService.handle(e as string);
    }
}
