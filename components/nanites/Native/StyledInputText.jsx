import styled from "styled-components/native";

const StyledInputText = styled.TextInput`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "12px"};
    border-radius: 10px;
    border-color: black;
    border-width: 1px;
    padding: 10px;
    margin: 10px;
    width: 20%;
`;

export default StyledInputText;