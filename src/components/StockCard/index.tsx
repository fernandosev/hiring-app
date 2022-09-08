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
  pricedAt?: Date;
  subtitle?: string;
}

const StockCard: React.FC<IStockCard> = ({
  name,
  lastPrice,
  pricedAt,
  subtitle,
}) => {
  const date = pricedAt ? moment(pricedAt).format("DD/MM/yyyy") : undefined;

  return (
    <Container>
      <StockNameContainer>
        <StockName>{name}</StockName>
      </StockNameContainer>
      <PriceText>{`$ ${lastPrice}`}</PriceText>
      <DateText>{date ? date : subtitle}</DateText>
    </Container>
  );
};

export default StockCard;
