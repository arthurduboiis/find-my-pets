import React from "react";
import { Native } from "../../nanites";

const Paragraph = (props) => {
    let defaultParagraph = "Default Paragraph";
    return <Native.StyledParagraph>{props?.paragraph ? props?.paragraph : defaultParagraph}</Native.StyledParagraph>;
}

export default Paragraph;