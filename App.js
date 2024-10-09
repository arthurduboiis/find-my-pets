import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
const StyledContainer = styled.View`
background-color: red; 
flex: 1; 
align-items: center;
 justify-content: center;

`;


export default function App() {
  return (
    <StyledContainer>
      <Text>Open up App.js to stop working on your app!</Text>
      <StatusBar style="auto" />
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
