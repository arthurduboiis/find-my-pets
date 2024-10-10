import { styled } from "styled-components/native";

const StyledParagraph = styled.Text`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "12px"}; 
`;

export default StyledParagraph;