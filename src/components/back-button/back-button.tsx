import { useNavigation } from "@react-navigation/native";
import React from "react";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";

import { NavigationProps } from "../../types";
import { backIcon } from "../../utils";


export const BackButton = () => {
    const { goBack } = useNavigation<NavigationProps>();

    return (
        <StyledBackButton
            onPress={goBack}
        >
            <BackButtonIcon source={backIcon} resizeMode="contain"/>
        </StyledBackButton>
    );
};

const StyledBackButton = styled.TouchableOpacity`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

const BackButtonIcon = styled(FastImage)`
  width: 26px;
  height: 26px;
`;
