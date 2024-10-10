import styled from 'styled-components/native';
import { Buttons, Icon, Image, Text, Input, SwapImage } from './components/atoms';
import { IconButton } from "./components/molecules";

const StyledContainer = styled.View`
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {

  const actionSecondaryButton = () => {
    console.log("Secondary button pressed from App.js");
  }
  return (
    <StyledContainer>
      <Buttons.Primary title="Primary" />
      <Buttons.Secondary title="secondary" action={actionSecondaryButton}/>
      <Buttons.Toggle title="Toggle" />
      <Text.Title title="Titre" />
      <Text.SubTitle subTitle="Sous titre" />
      <IconButton iconType="material" name="favorite-border" fontSize="30px" action={() => console.log("Icon button like pressed")} />
      <IconButton iconType="antDesign" name="close" fontSize="30px" action={() => console.log("Icon button dislike pressed")} />
      <Text.Paragraph paragraph="Paragraphe" />
      <Icon.Base name="home" iconType="material"/>
      <Icon.Base name="user" iconType="antDesign"/>
      <Image.Base source={{
         uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
      <SwapImage.Base></SwapImage.Base>
      <SwapImage.Base selected></SwapImage.Base>
      <Input.InputText placeholder="Enter your name" backgroundColor="red"/>
    </StyledContainer>
  );
}

