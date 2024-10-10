import React from "react";
import { Native } from "../../nanites";

const Base = (props) => {
    return <Native.StyledIconBase name={props.name ?? "default"}></Native.StyledIconBase>;
}

export default Base;