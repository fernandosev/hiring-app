import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 500px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.primaryText};
  font-size: ${metrics.fontSizeMedium}px;
  font-weight: bold;
`;
