import { Native } from "../../nanites";


const Secondary = ({title, action = () => {}}) => {
  const defaultTitle = "Secondary Button title to set ";
  return (
    <Native.StyledButton onPress={() => {
      action();
      console.log("Secondary button pressed");
    }} secondary>
      <Native.StyledParagraph>{title ? title : defaultTitle}</Native.StyledParagraph>
    </Native.StyledButton>
  );
};

export default Secondary;
