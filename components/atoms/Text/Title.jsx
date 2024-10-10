import React from "react";
import { Native } from "../../nanites";
const Title = (props) => {
    let defaultTitle = "Default Title";
    return <Native.StyledTitle>{props?.title ? props?.title : defaultTitle}</Native.StyledTitle>;
}

export default Title;