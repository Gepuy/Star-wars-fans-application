import LottieView from "lottie-react-native";
import React from "react";
import styled from "styled-components/native";

import { yodaLoader } from "../../utils";

export const Loader = () => {
    return (
        <StyledLoader
            source={yodaLoader}
            autoPlay
            loop
            resizeMode="center"
        />
    );
};

const StyledLoader = styled(LottieView)`
    height: 50px;
    width: 250px;
    align-self: center;
    flex: 0.8;
`;
