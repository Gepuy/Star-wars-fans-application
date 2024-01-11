import FastImage from "react-native-fast-image";
import styled from "styled-components/native";

import { getScreenWidthWithMargin } from "../../utils";

export const StyledHeader = styled.View<{readonly height: number}>`
  min-height: ${({ height }) => height}px;
  width: ${getScreenWidthWithMargin()}px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: flex-end;
`;

export const HeaderButtonContainer = styled.View<{readonly isLeft: boolean}>`
  flex-direction: row;
  justify-content: ${({ isLeft }) => isLeft ? "flex-start" : "flex-end"};
  align-items: center;
`;

export const StyledLogoImage = styled(FastImage)`
  width: 35px;
  height: 35px;
`;
