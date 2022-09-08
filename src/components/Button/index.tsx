import React from "react";
import { ActivityIndicator } from "react-native";

import { Container, ButtonText } from "./styles";
import { colors } from "~/styles";

interface IButton {
  name: string;
  loading: boolean;
  action?: () => void;
}

const Button: React.FC<IButton> = ({ name, loading, action }) => {
  return (
    <Container onPress={action}>
      {loading && <ActivityIndicator color={colors.secondary} />}
      {!loading && <ButtonText>{name}</ButtonText>}
    </Container>
  );
};

export default Button;
