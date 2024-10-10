import React from "react";
import { Native } from "../../nanites";

const InputText = (props) => {
    const defaultPlaceholder = "Enter text here";
    return (
        <Native.StyledInputText 
            placeholder={props?.placeholder ? props.placeholder : defaultPlaceholder} 
            {...props}
        ></Native.StyledInputText>
    );
}

export default InputText;