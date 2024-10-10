import React from "react";
import { styled } from "styled-components/native";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

const StyledIconBase = styled(({ iconType, ...props }) => {
  switch (iconType) {
    case "material":
      return <MaterialIcons {...props} />;
    case "antDesign":
      return <AntDesign {...props} />;
    case "fontAwesome":
      return <FontAwesome {...props} />;
    default:
      return <MaterialIcons {...props} />;
  }
})`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  font-size: ${(props) => props.fontSize ?? "40px"};
`;

export default StyledIconBase;
