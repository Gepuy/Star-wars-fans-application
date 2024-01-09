import { Platform } from "react-native";
import BuildConfig from "react-native-config";

import { ConfigState } from "../types";

const createConfig = () => {
    const config = ({ API_ROOT: BuildConfig.API_ROOT, }) as ConfigState;

    return {
        get<K extends keyof ConfigState>(key: K): ConfigState[K] {
            return (config[key] as unknown) as ConfigState[K];
        },

        set<K extends keyof ConfigState>(key: K, value: ConfigState[K]) {
            // eslint-disable-next-line functional/immutable-data
            config[key] = value;

            return value;
        },
    };
};

export default createConfig();

export { createConfig };

export const IS_IOS = Platform.OS === "ios";
