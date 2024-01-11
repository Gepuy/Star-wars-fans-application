import { Dimensions } from "react-native";

export function getScreenWidth() {
    return Dimensions.get("window").width ? Dimensions.get("window").width : 320;
}

export function getScreenWidthWithMargin() {
    return getScreenWidth() - 40;
}

export function getScreenHeight() {
    return Dimensions.get("window").height ? Dimensions.get("window").height : 568;
}
