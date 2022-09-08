import React, { useState } from "react";
import { Alert } from "react-native";

// Libs

// Store
import { useAppSelector } from "~/store/hooks";
import { useDispatch } from "react-redux";
import { historyRequest } from "~/store/modules/stock/slice";

// Components
import Button from "~/components/Button";
import StockHistoryChart from "~/components/StockHistoryChart";
import TextInput from "~/components/TextInput";

// Styles
import {
  Container,
  ScrollContainer,
  StockContainer,
  SearchMessage,
} from "./styles";
import { colors } from "~/styles";

// @Types

const History: React.FC = () => {
  const dispatch = useDispatch();
  const loadingHistory = useAppSelector((store) => store.stock.loadingHistory);
  const history = useAppSelector((store) => store.stock.history);

  const [stock, setStock] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const renderMessage = (title: string, body: string) => {
    Alert.alert(title, body);
  };

  return (
    <Container>
      <ScrollContainer>
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

        <TextInput
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={setStartDate}
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          value={startDate}
          placeholder="Start Date - DD/MM/YYYY"
          maxLength={10}
          titleColor={colors.primary}
        />

        <TextInput
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={setEndDate}
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          value={endDate}
          placeholder="End Date - DD/MM/YYYY"
          maxLength={10}
          titleColor={colors.primary}
        />

        <Button
          name="Search"
          action={
            loadingHistory
              ? undefined
              : () =>
                  dispatch(
                    historyRequest({
                      name: stock,
                      startDate,
                      endDate,
                      renderMessage,
                    })
                  )
          }
          loading={loadingHistory}
        />

        <StockContainer>
          {loadingHistory && <SearchMessage>Loading Data</SearchMessage>}
          {!loadingHistory && !history && (
            <SearchMessage>Search a Stock</SearchMessage>
          )}

          {!loadingHistory && history !== undefined && (
            <StockHistoryChart
              minValue={history.minValue}
              maxValue={history.maxValue}
              lowData={history.lowData}
              closingData={history.closingData}
              hightData={history.hightData}
              hightLabel="Hight Price"
              ClosingLabel="Closing Price"
              LowLabel="Low Price"
              startDate={history.startDate}
              endDate={history.endDate}
              zoomDomain={5}
              lowColor={colors.primary}
            />
          )}
        </StockContainer>
      </ScrollContainer>
    </Container>
  );
};

export default History;
