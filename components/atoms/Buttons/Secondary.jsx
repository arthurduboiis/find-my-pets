import styled from "styled-components/native";
import { Text } from "react-native";

const StyledSecondaryButton = styled.Pressable`
  border-color: #c7b198;
  border-width: 4px;
  border-style: solid;
  borderRadius: 100px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

const Secondary = ({title, action = () => {}}) => {
  const defaultTitle = "Secondary Button title to set ";
  return (
    <StyledSecondaryButton onPress={() => {
      action();
      console.log("Secondary button pressed");
    }}>
      <Text>{title ? title : defaultTitle}</Text>
    </StyledSecondaryButton>
  );
};

export default Secondary;
