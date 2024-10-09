import styled from "styled-components/native";
import { Text } from "react-native";

const StyledPrimaryButton = styled.Pressable`
  background-color: #c7b198;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  borderRadius: 100px;
`;

const Primary = (props) => {
  const defaultTitle = "Primary Button title to set";

  return (
    <StyledPrimaryButton>
      <Text> {props?.title ? props?.title : defaultTitle}</Text>
    </StyledPrimaryButton>
  );
};

export default Primary;
