import styled from "styled-components/native";

const StyledButton = styled.Pressable`
  background-color: ${(props) => !props.secondary ? '#c7b198' : 'transparent'};
  padding-vertical: ${(props) => !props.like ? '10px' : '0px'};
  padding-horizontal: ${(props) => !props.like ? '20px' : '0px'};
  border-color: ${(props) => props.secondary ? '#c7b198' : 'transparent'};
  border-width: ${(props) => props.secondary ? '4px' : '0px'};
  borderRadius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.like  && "width: 50px; height: 50px;"}
`;

export default StyledButton;
