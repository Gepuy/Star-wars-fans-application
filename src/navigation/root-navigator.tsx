import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import { CharacterDetailsScreen, HomeScreen } from "../screens";
import { RootStackParamList } from "../types";

import { horizontalAnimation } from "./transition-animations.ts";


const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <NavigationContainer
            fallback={<Text>Loading...</Text>}
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false, }}
                initialRouteName={"HomeScreen"}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={horizontalAnimation}/>
                <Stack.Screen name="CharacterDetailsScreen" component={CharacterDetailsScreen} options={horizontalAnimation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
