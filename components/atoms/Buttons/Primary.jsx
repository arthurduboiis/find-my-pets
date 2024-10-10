import { Native } from "../../nanites";

const Primary = ({ title, action = () => {} }) => {
  const defaultTitle = "Primary Button title to set";

  return (
    <Native.StyledButton
      onPress={() => {
        action();
        console.log("Primary button pressed");
      }}
    >
      <Native.StyledParagraph >
        {" "}
        {title ? title : defaultTitle}
      </Native.StyledParagraph>
    </Native.StyledButton>
  );
};

export default Primary;
