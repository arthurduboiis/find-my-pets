import styled from "styled-components/native";
const ToggleContainer = styled.Pressable`
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background-color: ${(props) => (props.active ? "#596e79" : "#dfd3c3")};
  padding: 5px;
  justify-content: center;
`;

// Switch avec ombre et effet de mouvement

export default ToggleContainer ;
