import { Native } from "../../nanites";


function LikeDislike({ action = () => {}, children }) {
  return (
    <Native.StyledButton like onPress={() => {
      action();
      console.log("Like button pressed");
    }}>
      {children}
      </Native.StyledButton>
  )
}

export default LikeDislike