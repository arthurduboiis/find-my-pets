import { Native } from "../../nanites";


const Primary = (props) => {
  const defaultTitle = "Primary Button title to set";

  return (
    <Native.StyledPrimaryButton>
      <Native.StyledParagraph> {props?.title ? props?.title : defaultTitle}</Native.StyledParagraph>
    </Native.StyledPrimaryButton>
  );
};

export default Primary;
