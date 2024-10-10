import styled from "styled-components/native";
import { Native } from "../../nanites";
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
      <Native.StyledParagraph> {props?.title ? props?.title : defaultTitle}</Native.StyledParagraph>
    </StyledPrimaryButton>
  );
};

export default Primary;
