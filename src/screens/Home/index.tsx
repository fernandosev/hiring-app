import { Alert } from "react-native";
import React, { useState } from "react";

// Libs

// Store
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  quoteRequest,
  stocksToCompareRequest,
} from "~/store/modules/stock/slice";

// Components
import TextInput from "~/components/TextInput";
import Button from "~/components/Button";
import Icon from "~/components/Icon";
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
  ScrollContainer,
} from "./styles";
import { colors } from "~/styles";

// @Types

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingQuote = useAppSelector((store) => store.stock.loadingQuote);
  const loadingStocksToCompare = useAppSelector(
    (store) => store.stock.loadingStocksToCompare
  );
  const quote = useAppSelector((store) => store.stock.quote);
  const stocksToCompare = useAppSelector(
    (store) => store.stock.stocksToCompare
  );

  const [stock, setStock] = useState("");

  const [numberOfStocks, setNumberOfStocks] = useState(0);

  const [stockNamesToCompare, setStockNamesToCompare] = useState<string[]>([]);

  const addStockToCompare = () => {
    const stocks = [...stockNamesToCompare];

    stocks.push("");

    setStockNamesToCompare(stocks);
    setNumberOfStocks(numberOfStocks + 1);
  };

  const setStockText = (text: string, index: number) => {
    const stocks = [...stockNamesToCompare];

    stocks[index] = text;

    setStockNamesToCompare(stocks);
  };

  const renderMessage = (title: string, body: string) => {
    Alert.alert(title, body);
  };

  return (
    <Container>
      <ScrollContainer>
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
            onPress={() =>
              dispatch(quoteRequest({ name: stock, renderMessage }))
            }
          >
            <Icon name="magnify" color={colors.primary} size={30} />
          </SearchStockButton>
        </SearchStockContainer>

        {loadingQuote && <SearchMessage>Loading Stock</SearchMessage>}
        {!loadingQuote && !quote && (
          <SearchMessage>Search a Stock</SearchMessage>
        )}

        {quote !== undefined && (
          <AddStockButton onPress={addStockToCompare}>
            <AddStockText>Add Stock to compare</AddStockText>
            <AddButton>
              <Icon name="plus" size={20} />
            </AddButton>
          </AddStockButton>
        )}

        {quote !== undefined &&
          [...Array(numberOfStocks)].map((item, index) => (
            <TextInput
              key={index}
              autoCapitalize="none"
              keyboardType="default"
              autoCorrect={false}
              onChangeText={(text) => setStockText(text, index)}
              value={stockNamesToCompare[index]}
              placeholder="Stock"
              maxLength={10}
              titleColor={colors.primary}
            />
          ))}

        {quote !== undefined && numberOfStocks > 0 && (
          <Button
            name="Search"
            action={
              loadingStocksToCompare
                ? undefined
                : () =>
                    dispatch(
                      stocksToCompareRequest({
                        name: stock,
                        stocks: stockNamesToCompare,
                        renderMessage,
                      })
                    )
            }
            loading={loadingStocksToCompare}
          />
        )}

        <StockContainer>
          {!loadingQuote && quote !== undefined && (
            <StockCard
              testId="stockCard"
              name={quote.name}
              price={quote.lastPrice}
              pricedAt={quote.pricedAt}
            />
          )}

          {!loadingStocksToCompare &&
            stocksToCompare !== undefined &&
            stocksToCompare?.map((stock, index) => (
              <StockCard
                key={index}
                name={stock.name}
                price={stock.lastPrice}
                pricedAt={stock.pricedAt}
              />
            ))}
        </StockContainer>
      </ScrollContainer>
    </Container>
  );
};

export default Home;
