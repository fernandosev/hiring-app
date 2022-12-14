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
  price: number;
  pricedAt?: Date;
  subtitle?: string;
  testId?: string;
}

const StockCard: React.FC<IStockCard> = ({
  name,
  price,
  pricedAt,
  subtitle,
  testId,
}) => {
  const date = pricedAt ? moment(pricedAt).format("DD/MM/yyyy") : undefined;

  return (
    <Container testId={testId}>
      <StockNameContainer>
        <StockName>{name}</StockName>
      </StockNameContainer>
      <PriceText numberOfLines={1}>{`$ ${price.toFixed(2)}`}</PriceText>
      <DateText>{date ? date : subtitle}</DateText>
    </Container>
  );
};

export default StockCard;
