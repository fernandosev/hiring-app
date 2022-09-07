import React from "react";

// Styles
import {
  Container,
  StockNameContainer,
  StockName,
  PriceText,
  DateText,
} from "./styles";

interface IStockCard {
  name: string;
  lastPrice: number;
  pricedAt: string;
}

const StockCard: React.FC<IStockCard> = ({ name, lastPrice, pricedAt }) => {
  return (
    <Container>
      <StockNameContainer>
        <StockName>{name}</StockName>
      </StockNameContainer>
      <PriceText>{`$ ${lastPrice}`}</PriceText>
      <DateText>{pricedAt}</DateText>
    </Container>
  );
};

export default StockCard;
