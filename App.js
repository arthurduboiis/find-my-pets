import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { Text } from './components/atoms';
const StyledContainer = styled.View`
background-color: red; 
flex: 1; 
align-items: center;
 justify-content: center;

`;


export default function App() {
  return (
    <StyledContainer>
      <Text.Title title="Titre" />
      <Text.SubTitle subTitle="Sous titre" />
      <Text.Paragraph paragraph="Paragraphe" />
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
