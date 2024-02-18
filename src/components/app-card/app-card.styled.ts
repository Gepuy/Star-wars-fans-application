import styled from "styled-components/native";

import { IS_IOS } from "../../configs";
import { getScreenHeight } from "../../utils";

export const StyledAppCard = styled.View<{
  readonly height?: number;
}>`
  ${IS_IOS && "margin-right: 20px;"}
  ${IS_IOS && "margin-left: 20px;"}
  height: ${({ height }) => height ? height : getScreenHeight() - 90}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const StyledScrollView = styled.ScrollView<{
  readonly height?: number;
  readonly width?: number;
}>`
  height: ${({ height }) => height ? height : "100%"};
  width: ${({ width }) => width ? width : "100%"};
  flex: 1;
`;

