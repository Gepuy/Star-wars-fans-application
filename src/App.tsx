import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { RootNavigator } from "./navigation";
import { persistor, store } from "./store";



function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar
                    translucent
                    backgroundColor="#E9E9E9"
                />
                <RootNavigator/>
            </PersistGate>
        </Provider>
    );
}

export default App;
