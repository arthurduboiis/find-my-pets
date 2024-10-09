import React from "react";
import { styled } from "styled-components/native";

const StyledSubTitle = styled.Text`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "18px"};
`;

const SubTitle = (props) => {
    let defaultSubTitle = "Default SubTitle";
    return <StyledSubTitle>{props?.subTitle ? props?.subTitle : defaultSubTitle}</StyledSubTitle>;
}

export default SubTitle;