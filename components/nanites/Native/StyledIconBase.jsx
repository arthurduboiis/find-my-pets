import React from "react";
import { styled } from "styled-components/native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const StyledIconBase = styled(({ iconType, ...props }) => {
    const Icon = iconType === "material" ? MaterialIcons : AntDesign;
    return <Icon {...props} />;
})`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "40px"};
`;

export default StyledIconBase;