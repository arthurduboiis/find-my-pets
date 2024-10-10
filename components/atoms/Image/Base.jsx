import React from "react";
import { Native } from "../../nanites";

const Base = (props) => {
    return <Native.StyledImageBase source={props.source ?? "default"}></Native.StyledImageBase>;
}

export default Base;