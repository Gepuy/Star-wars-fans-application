import { RouteProp, useRoute } from "@react-navigation/core";
import React from "react";

import { AppView } from "../components";
import { RootStackParamList } from "../types";

export const CharacterDetailsScreen = () => {
    const route = useRoute<
        RouteProp<RootStackParamList, "CharacterDetailsScreen">
    >();

    const { name } = route.params;

    return (
        <AppView title={name ?? "Star wars character"} shouldShowLogo={false}>

        </AppView>
    );
};
