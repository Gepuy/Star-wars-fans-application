import styled from "styled-components/native";

export const StyledAppView = styled.View<{
    readonly height?: string
    readonly width?: string
}>`
  height: ${({ height }) => height ? height : "100%"};
  width: ${({ width }) => width ? width : "100%"};
  background-color: #E9E9E9;  
`;
