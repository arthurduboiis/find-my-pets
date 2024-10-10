import React from "react";
import { Native } from "../../nanites";

const SubTitle = (props) => {
    let defaultSubTitle = "Default SubTitle";
    return <Native.StyledSubTitle>{props?.subTitle ? props?.subTitle : defaultSubTitle}</Native.StyledSubTitle>;
}

export default SubTitle;