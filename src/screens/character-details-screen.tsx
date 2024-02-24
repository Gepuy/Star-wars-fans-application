import { RouteProp, useRoute } from "@react-navigation/core";
import React, { useMemo } from "react";
import styled from "styled-components/native";

import { AppView, StyledText } from "../components";
import { EFontFamily, RootStackParamList } from "../types";
import { fieldsToShow, getCharacterDetails, getScreenWidthWithMargin } from "../utils";


export const CharacterDetailsScreen = () => {
    const route = useRoute<
        RouteProp<RootStackParamList, "CharacterDetailsScreen">
    >();

    const {
        name, skinColor , eyeColor, birthYear, height, mass, gender
    } = route.params;

    const dataToShow = useMemo(() => {
        return getCharacterDetails({
            name, skinColor, eyeColor, height, mass, gender, birthYear
        }, fieldsToShow);
    }, [birthYear, eyeColor, gender, height, mass, name, skinColor]);


    return (
        <AppView title={name ?? "Star wars character"} shouldShowLogo={false}>
            <DetailsContainer>
                <StyledText
                    alignText="left"
                    alignSelf="flex-start"
                    isBold
                    font={EFontFamily.MONTSERRAT}
                    size={20}
                    marginBottom={10}
                    marginLeft={7}
                >Basic info:</StyledText>
                {dataToShow.map((item, index) => (
                    <Item key={index}>
                        <StyledText font={EFontFamily.MONTSERRAT} isBold={true}>
                            {item.title}
                        </StyledText>
                        <StyledText font={EFontFamily.MONTSERRAT}>
                            {item.value}
                        </StyledText>
                    </Item>
                ))}
            </DetailsContainer>
        </AppView>
    );
};

const DetailsContainer = styled.View`
    width: ${getScreenWidthWithMargin()}px;
    background-color: #F4F4F4;
    border-radius: 10px;
    min-height: 40px;
    align-self: center;
    margin-top: 20px;
    padding: 15px 20px;
`;

const Item = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    justify-content: space-between;
`;
