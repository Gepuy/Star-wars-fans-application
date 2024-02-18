import React from "react";
import styled from "styled-components/native";

import { EFontFamily } from "../../types";
import { getScreenWidthWithMargin } from "../../utils";
import { StyledText } from "../text/text.styled.ts";

type GenderContainerProps = {
    readonly data: ReadonlyArray<{
        readonly title: string;
        readonly value: number;
    }>
}

export const GenderFavouritesSection = ({ data }: GenderContainerProps) => {
    const renderGenderCard = (title: string, value: number = 0) => {
        return (
            <GenderCard>
                <CountText
                    size={36}
                    alignSelf="flex-start"
                    font={EFontFamily.MONTSERRAT}
                >
                    {value}
                </CountText>
                <GenderText
                    size={14}
                    alignSelf="flex-start"
                    font={EFontFamily.MONTSERRAT}
                >
                    {title}
                </GenderText>
            </GenderCard>
        );
    };

    return (
        <Container>
            {data?.length && (
                data.map(item => {
                    return renderGenderCard(item.title, item.value);
                })
            )}
        </Container>
    );
};

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    margin: 20px 0 15px;
    width: ${getScreenWidthWithMargin()}px;
`;

const GenderCard = styled.View`
    background-color: #F4F4F4;
    height: 75px;
    width: 31%;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    padding: 12px 10px 8px;
    flex-direction: column;
    justify-content: space-between;
`;

const CountText = styled(StyledText)`
    font-weight: bold;
    line-height: 35px;
`;

const GenderText = styled(StyledText)`
    line-height: 14px;
`;
