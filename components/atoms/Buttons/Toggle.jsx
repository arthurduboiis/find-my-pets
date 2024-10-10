import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import { Native } from "../../nanites";
import styled from "styled-components/native";

const Switch = styled(Animated.View)`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [switchAnim] = useState(new Animated.Value(0));

  const handleToggle = () => {
    setIsActive(!isActive);

    Animated.timing(switchAnim, {
      toValue: isActive ? 0 : 30,
      duration: 300,
      easing: Easing.out(Easing.elastic(1.5)),
      useNativeDriver: false,
    }).start();
  };

  return (
    <Native.ToggleContainer active={isActive} onPress={handleToggle}>
      <Switch style={{ transform: [{ translateX: switchAnim }] }} />
    </Native.ToggleContainer>
  );
};

export default Toggle;
