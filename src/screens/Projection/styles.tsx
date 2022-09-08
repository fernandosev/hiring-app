import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View<{ backgorund?: string }>`
  flex: 1;
  margin: ${metrics.basePadding}px;
  margin-top: 60px;
`;

export const ScrollContainer = styled.ScrollView``;

export const StockContainer = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const SearchMessage = styled.Text`
  text-align: center;
  color: ${colors.grey3};
  font-size: ${metrics.fontSizeMedium}px;
`;

export const Button = styled.TouchableOpacity`
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
