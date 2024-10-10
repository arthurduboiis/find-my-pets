import { Buttons } from "./components/atoms";
import styled from 'styled-components/native';
import { Icon, Text } from './components/atoms';


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
      <Text.Paragraph paragraph="Paragraphe" />
      <Icon.Base name="home" iconType="material"/>
      <Icon.Base name="user" iconType="antdesign"/>
    </StyledContainer>
  );
}

