import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View<{ backgorund?: string }>`
  flex: 1;
  margin: ${metrics.basePadding}px;
  margin-top: 60px;
`;

export const ScrollContainer = styled.ScrollView.attrs((props) => {
  return {
    contentContainerStyle: {
      paddingBottom: 70,
    },
  };
})``;

export const StockContainer = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const SearchMessage = styled.Text`
  text-align: center;
  color: ${colors.grey3};
  font-size: ${metrics.fontSizeMedium}px;
`;
