import moment from "moment";
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
  pricedAt: Date;
}

const StockCard: React.FC<IStockCard> = ({ name, lastPrice, pricedAt }) => {
  const date = moment(pricedAt).format("DD/MM/yyyy");

  return (
    <Container>
      <StockNameContainer>
        <StockName>{name}</StockName>
      </StockNameContainer>
      <PriceText>{`$ ${lastPrice}`}</PriceText>
      <DateText>{date}</DateText>
    </Container>
  );
};

export default StockCard;
