import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.SafeAreaView<{ backgorund?: string }>`
  flex: 1;
  margin: ${metrics.basePadding}px;
`;

export const SearchStockContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const InputContainer = styled.View`
  flex: 1;
`;
export const SearchStockButton = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

export const StockContainer = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const SearchMessage = styled.Text`
  text-align: center;
  color: ${colors.grey3};
`;

export const AddStockButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const AddStockText = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  font-weight: bold;
  color: ${colors.primary};
  flex: 1;
`;

export const AddButton = styled.View`
  width: 25px;
  height: 25px;
  background-color: ${colors.primary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
