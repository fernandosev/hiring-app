import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.View`
  width: 100%;
  height: 110px;
  background-color: ${colors.primary};
  border-radius: ${metrics.baseRadiusMedium}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const StockNameContainer = styled.View`
  width: 100px;
  height: 100%;
  background-color: ${colors.tertiary};
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${metrics.baseRadiusMedium}px;
  border-bottom-left-radius: ${metrics.baseRadiusMedium}px;
  margin-right: 15px;
`;

export const StockName = styled.Text`
  color: ${colors.primaryText};
  font-weight: bold;
  font-size: ${metrics.fontSizeMedium}px;
`;

export const PriceText = styled.Text`
  font-size: 36px;
  font-weight: 300;
  color: ${colors.primaryText};
`;

export const DateText = styled.Text`
  font-size: ${metrics.fontSizeLow}px;
  font-weight: bold;
  color: ${colors.primaryText};
  text-align: right;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;
