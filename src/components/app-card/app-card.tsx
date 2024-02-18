import React, { PropsWithChildren } from "react";

import { StyledAppCard } from "./app-card.styled.ts";

type AppCardProps = {
    readonly height?: number;
}

export const AppCard = ({ height, children }: Readonly<PropsWithChildren<AppCardProps>>) => {
    return (
        <StyledAppCard height={height}>{children}</StyledAppCard>
    );
};
