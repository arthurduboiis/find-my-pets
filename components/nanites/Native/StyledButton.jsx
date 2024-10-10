import styled from "styled-components/native";

const StyledButton = styled.Pressable`
  background-color: ${(props) => !props.secondary ? '#c7b198' : 'transparent'};
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-color: ${(props) => props.secondary ? '#c7b198' : 'transparent'};
  border-width: ${(props) => props.secondary ? '4px' : '0px'};
  border-style: ${(props) => props.secondary ? 'solid' : 'none'};
  borderRadius: 100px;
`;

export default StyledButton;
