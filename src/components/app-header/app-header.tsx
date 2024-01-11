import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

import { NavigationProps } from "../../types";
import { logoIcon } from "../../utils";
import { BackButton } from "../back-button/back-button.tsx";
import { StyledText } from "../text/text.styled.ts";

import { HeaderButtonContainer, StyledHeader, StyledLogoImage } from "./app-header.styled.ts";


type AppHeaderProps = {
    readonly shouldShowLogo?: boolean
    readonly title?: string;
    readonly height?: number;
}

const _AppHeader = ({
    shouldShowLogo, title, height = 50,
}: AppHeaderProps) => {
    const { navigate } = useNavigation<NavigationProps>();

    const onHeaderTextPress = () => {
        navigate("HomeScreen");
    };

    return (
        <StyledHeader height={height}>
            <HeaderButtonContainer isLeft={true}>
                {
                    shouldShowLogo ? (
                        <TouchableOpacity onPress={onHeaderTextPress}>
                            <StyledLogoImage source={logoIcon} resizeMode="contain"/>
                        </TouchableOpacity>
                    ) : <BackButton />
                }
            </HeaderButtonContainer>
            {title && (
                <TouchableWithoutFeedback>
                    <TitleWrapper>
                        <StyledText size={22}>{title}</StyledText>
                    </TitleWrapper>
                </TouchableWithoutFeedback>
            )}
        </StyledHeader>
    );
};

export const AppHeader = memo(_AppHeader);

export const TitleWrapper = styled.View`
  margin-top: 8px;
`;
