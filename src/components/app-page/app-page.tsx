import React, { PropsWithChildren } from "react";

import { StyledSafeAreaView } from "../safe-area/safe-area.styled.ts";

import { StyledAppView } from "./app-page.styled";

type AppViewProps = {
    readonly height?: string;
    readonly width?: string;
}

export const AppView = ({
  children, height, width
}: Readonly<PropsWithChildren<AppViewProps>>) => {
    return (
        <StyledSafeAreaView>
            <StyledAppView height={height} width={width}>
                {children}
            </StyledAppView>
        </StyledSafeAreaView>
    );
};
