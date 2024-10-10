import { Buttons, Icon } from "../atoms";

const IconButton = ({ iconType, name, action = () => {},fontSize = undefined }) => {
  return (
    <Buttons.LikeDislike action={action}>
      <Icon.Base name={name} iconType={iconType} fontSize={fontSize}/>
    </Buttons.LikeDislike>
  );
}

export default IconButton;