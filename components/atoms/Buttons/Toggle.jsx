import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';

// Container du toggle avec fond dynamique
const ToggleContainer = styled.Pressable`
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background-color: ${(props) => (props.active ? '#596e79' : '#dfd3c3')};
  padding: 5px;
  justify-content: center;
`;

// Switch avec ombre et effet de mouvement
const Switch = styled(Animated.View)`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [switchAnim] = useState(new Animated.Value(0)); // Crée une animation basée sur l'état

  const handleToggle = () => {
    // Inverse l'état du toggle
    setIsActive(!isActive);

    // Anime la position du switch avec un effet de rebond
    Animated.timing(switchAnim, {
      toValue: isActive ? 0 : 30, // Glisse à droite ou revient à gauche
      duration: 300, // Durée de l'animation
      easing: Easing.out(Easing.elastic(1.5)), // Ajout d'un effet de rebond élastique
      useNativeDriver: false, // Laisse React Native gérer l'animation sans utiliser le moteur natif
    }).start();
  };

  return (
    <ToggleContainer active={isActive} onPress={handleToggle}>
      <Switch style={{ transform: [{ translateX: switchAnim }] }} />
    </ToggleContainer>
  );
};

export default Toggle;
