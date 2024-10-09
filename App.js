import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { Buttons } from "./components/atoms";

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
      <Text>Open up App.js to stop working on your app!</Text>
      <Buttons.Primary title="Primary" />
      <Buttons.Secondary title="secondary" action={actionSecondaryButton}/>
      <Buttons.Toggle title="Toggle" />
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
