import styled from "styled-components/native";

const StyleSwapImageBase = styled.View`
    background-color: ${(props) => props.selected ? "#dfd3c3" : "#596e79"};
    width: ${(props) => props.width ?? "70px"};
    height: ${(props) => props.height ?? "15px"};
    border-radius: ${(props) => props.borderRadius ?? "30px"};

`;

export default StyleSwapImageBase;