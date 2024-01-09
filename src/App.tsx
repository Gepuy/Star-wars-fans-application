import React from "react";
import { StatusBar } from "react-native";

import { RootNavigator } from "./navigation";


function App(): React.JSX.Element {

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <RootNavigator/>
        </>
    );
}

export default App;
