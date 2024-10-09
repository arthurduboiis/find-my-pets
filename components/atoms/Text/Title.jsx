import React from "react";
import { styled } from "styled-components/native";

const StyledTitle = styled.Text`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "24px"};
    text-align: ${(props) => props.textAlign ?? "center"};
`;

const Title = (props) => {
    let defaultTitle = "Default Title";
    return <StyledTitle>{props?.title ? props?.title : defaultTitle}</StyledTitle>;
}

export default Title;