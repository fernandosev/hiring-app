import React, { useState } from "react";
import Icon from "~/components/Icon";

// Libs

// Store
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { quoteRequest } from "~/store/modules/stock/slice";

// Components
import TextInput from "~/components/TextInput";
import StockCard from "~/components/StockCard";

// Styles
import {
  Container,
  SearchStockContainer,
  InputContainer,
  SearchStockButton,
  StockContainer,
  SearchMessage,
  AddStockButton,
  AddStockText,
  AddButton,
} from "./styles";
import { colors } from "~/styles";

// @Types

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingQuote = useAppSelector((store) => store.stock.loadingQuote);
  const quote = useAppSelector((store) => store.stock.quote);

  const [stock, setStock] = useState("");

  // const [numberOfStocks, setNumberOfStocks] = useState(0);

  // const [stocksToCompare, setStocksToCompare] = useState<string[]>([]);

  // const addStockToCompare = () => {
  //   const stocks = [...stocksToCompare];

  //   stocks.push("");

  //   setStocksToCompare(stocks);
  //   setNumberOfStocks(numberOfStocks + 1);
  // };

  // const setStockText = (text: string, index: number) => {
  //   const stocks = [...stocksToCompare];

  //   stocks[index] = text;

  //   setStocksToCompare(stocks);
  // };

  return (
    <Container>
      <SearchStockContainer>
        <InputContainer>
          <TextInput
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={false}
            onChangeText={setStock}
            value={stock}
            placeholder="Stock"
            maxLength={10}
            titleColor={colors.primary}
          />
        </InputContainer>
        <SearchStockButton
          onPress={() => dispatch(quoteRequest({ name: stock }))}
        >
          <Icon name="magnify" color={colors.primary} size={30} />
        </SearchStockButton>
      </SearchStockContainer>

      <StockContainer>
        {loadingQuote && <SearchMessage>Loading Stock</SearchMessage>}
        {!loadingQuote && !quote && (
          <SearchMessage>Search a Stock</SearchMessage>
        )}

        {!loadingQuote && quote !== undefined && (
          <StockCard
            name={quote.name}
            lastPrice={quote.lastPrice}
            pricedAt={quote.pricedAt}
          />
        )}

        {/* <AddStockButton onPress={addStockToCompare}>
          <AddStockText>Add Stock to compare</AddStockText>
          <AddButton>
            <Icon name="plus" size={20} />
          </AddButton>
        </AddStockButton>

        {[...Array(numberOfStocks)].map((item, index) => (
          <TextInput
            key={index}
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={false}
            onChangeText={(text) => setStockText(text, index)}
            value={stocksToCompare[index]}
            placeholder="Stock"
            maxLength={10}
            titleColor={colors.primary}
          />
        ))} */}
      </StockContainer>
    </Container>
  );
};

export default Home;
