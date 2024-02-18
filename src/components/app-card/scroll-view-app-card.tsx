import React, { PropsWithChildren } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { withTheme } from "styled-components/native";

import { StyledScrollView } from "./app-card.styled.ts";
import { AppCard } from "./app-card.tsx";


type ScrollViewAppCardProps = {
    readonly refreshControl?: React.JSX.Element;
    readonly height?: number;
    readonly onScroll?:  (event: Readonly<NativeSyntheticEvent<NativeScrollEvent>>) => void
}

export const ScrollViewAppCard = ({
 refreshControl, children, height, onScroll
}: PropsWithChildren<ScrollViewAppCardProps>) => {
    return (
        <AppCard height={height}>
            <StyledScrollView
                refreshControl={refreshControl}
                height={height}
                showsVerticalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {children}
            </StyledScrollView>
        </AppCard>
    );
};
