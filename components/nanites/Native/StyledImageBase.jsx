import { styled } from "styled-components/native";

const StyledImageBase = styled.Image`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    width: ${(props) => props.width ?? "100px"};
    height: ${(props) => props.height ?? "100px"};
    object-fit: contain;

`;

export default StyledImageBase;