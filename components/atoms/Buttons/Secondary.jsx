import { Native } from "../../nanites";


const Secondary = ({title, action = () => {}}) => {
  const defaultTitle = "Secondary Button title to set ";
  return (
    <Native.StyledSecondaryButton onPress={() => {
      action();
      console.log("Secondary button pressed");
    }}>
      <Native.StyledParagraph>{title ? title : defaultTitle}</Native.StyledParagraph>
    </Native.StyledSecondaryButton>
  );
};

export default Secondary;
