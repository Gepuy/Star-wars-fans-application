import styled from "styled-components/native";


export const StyledText = styled.Text<{
    readonly font?: string;
    readonly size?: number;
    readonly color?: string;
    readonly alignText?: string;
    readonly marginRight?: string;
    readonly marginLeft?: string;
    readonly marginTop?: string;
    readonly marginBottom?: string;
}>`
  font-family: ${({ font }) =>  font ? font : "Starjedi"};;
  align-items: center;
  font-size: ${({ size }) =>  size ? size : 18}px;
  color: ${({ color }) => color ? color : "black"};
  align-self: center;
  text-align: ${({ alignText }) => alignText ? alignText : "center"};
  margin-right: ${({ marginRight }) => marginRight ? marginRight : 0}px;
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : 0}px;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : 0};
`;
