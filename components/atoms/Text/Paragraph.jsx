import React from "react";
import { styled } from "styled-components/native";

const StyledParagraph = styled.Text`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "12px"}; 
`;

const Paragraph = (props) => {
    let defaultParagraph = "Default Paragraph";
    return <StyledParagraph>{props?.paragraph ? props?.paragraph : defaultParagraph}</StyledParagraph>;
}

export default Paragraph;