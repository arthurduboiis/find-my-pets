import { styled } from "styled-components/native";

const StyledSubTitle = styled.Text`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    font-size: ${(props) => props.fontSize ?? "18px"};
`;

export default StyledSubTitle;