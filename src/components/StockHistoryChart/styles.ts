import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View``;

export const LabelsContainer = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const LabelColor = styled.View<{ background: string }>`
  background-color: ${(props) => props.background ?? colors.primary};
  width: 25px;
  height: 10px;
  margin-right: 10px;
`;

export const LabelText = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  color: ${colors.secondaryText};
`;
