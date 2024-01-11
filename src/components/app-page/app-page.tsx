import React, { PropsWithChildren } from "react";

import { AppHeader } from "../app-header/app-header.tsx";
import { StyledSafeAreaView } from "../safe-area/safe-area.styled.ts";

import { StyledAppView } from "./app-page.styled";

type AppViewProps = {
    readonly height?: string;
    readonly width?: string;
    readonly shouldShowHeader?: boolean;
    readonly title: string;
    readonly shouldShowLogo?: boolean;
}

export const AppView = ({
  children, height, width, shouldShowHeader = true, title, shouldShowLogo
}: Readonly<PropsWithChildren<AppViewProps>>) => {
    return (
        <StyledSafeAreaView>
            <StyledAppView height={height} width={width}>
                {shouldShowHeader &&
                    <AppHeader
                        title={title}
                        shouldShowLogo={shouldShowLogo}
                    />
                }
                {children}
            </StyledAppView>
        </StyledSafeAreaView>
    );
};
