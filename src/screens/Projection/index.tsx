import React, { useState } from "react";
import { Alert } from "react-native";

// Libs

// Store
import { useAppSelector } from "~/store/hooks";
import { useDispatch } from "react-redux";
import { projectionRequest } from "~/store/modules/stock/slice";

// Components
import TextInput from "~/components/TextInput";
import StockCard from "~/components/StockCard";
import Button from "~/components/Button";

// Styles
import { Container, ScrollContainer } from "./styles";
import { colors } from "~/styles";

// @Types

const Projection: React.FC = () => {
  const dispatch = useDispatch();
  const loadingProjection = useAppSelector(
    (store) => store.stock.loadingProjection
  );
  const projection = useAppSelector((store) => store.stock.projection);

  const [stock, setStock] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

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
          onChangeText={setDate}
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          value={date}
          placeholder="Purchased At - DD/MM/YYYY"
          maxLength={10}
          titleColor={colors.primary}
        />

        <TextInput
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={setAmount}
          value={amount}
          placeholder="Amount"
          maxLength={10}
          titleColor={colors.primary}
        />

        <Button
          name="Search"
          action={
            loadingProjection
              ? undefined
              : () =>
                  dispatch(
                    projectionRequest({
                      name: stock,
                      date,
                      amount: Number(amount),
                      renderMessage,
                    })
                  )
          }
          loading={loadingProjection}
        />

        {!loadingProjection && projection !== undefined && (
          <>
            <StockCard
              name={projection.name}
              price={projection.amount}
              subtitle="Amount"
            />
            <StockCard
              name={projection.name}
              price={projection.total}
              subtitle="Total"
            />
            <StockCard
              name={projection.name}
              price={projection.gain_lost}
              subtitle="Gain/Loss"
            />
          </>
        )}
      </ScrollContainer>
    </Container>
  );
};

export default Projection;
