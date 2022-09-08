import React from "react";

// Libs
import {
  VictoryStack,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryAxis,
} from "victory-native";
import moment from "moment";

// Styles
import {
  Container,
  LabelsContainer,
  LabelContainer,
  LabelColor,
  LabelText,
} from "./styles";
import { colors } from "~/styles";
import { Alert } from "react-native";

interface IStackChart {
  minValue: number;
  maxValue: number;
  startDate: Date;
  endDate: Date;
  hightData: { x: Date; y: number; price: number }[];
  closingData: { x: Date; y: number; price: number }[];
  lowData: { x: Date; y: number; price: number }[];
  hightLabel: string;
  ClosingLabel: string;
  LowLabel: string;
  zoomDomain?: number;
  hightColor?: string;
  closingColor?: string;
  lowColor?: string;
}

const StockHistoryChart: React.FC<IStackChart> = ({
  minValue,
  maxValue,
  startDate,
  endDate,
  hightData,
  closingData,
  lowData,
  hightLabel,
  ClosingLabel,
  LowLabel,
  zoomDomain = 10,
  hightColor = colors.success,
  closingColor = colors.info,
  lowColor = colors.danger,
}) => {
  const dateDomain = moment(startDate).add(zoomDomain, "days").toDate();

  return (
    <Container>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        domain={{ x: [startDate, endDate], y: [minValue, maxValue] }}
        containerComponent={
          <VictoryZoomContainer
            allowZoom={false}
            allowPan
            zoomDomain={{
              x: [startDate, endDate > dateDomain ? dateDomain : endDate],
            }}
          />
        }
      >
        {/* <VictoryAxis domain={{x: , y: [0, 1]}}/> */}
        <VictoryStack colorScale={[lowColor, closingColor, hightColor]}>
          <VictoryBar
            barWidth={15}
            data={lowData}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: (evt, pressedProps) => {
                    const index = pressedProps.index;
                    const date = lowData[index].x;
                    const lowPrice = lowData[index].price;

                    const closingPrice = closingData[index].price;

                    const hightPrice = closingData[index].price;

                    Alert.alert(
                      `Prices on ${moment(date).format("MMMM DD, yyyy")}`,
                      `\n\nLow Price: ${lowPrice}\n\nClosing Price: ${closingPrice}\n\nHight Price: ${hightPrice}`
                    );
                  },
                },
              },
            ]}
          />
          <VictoryBar
            barWidth={15}
            data={closingData}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: (evt, pressedProps) => {
                    const index = pressedProps.index;
                    const date = lowData[index].x;
                    const lowPrice = lowData[index].price;

                    const closingPrice = closingData[index].price;

                    const hightPrice = closingData[index].price;

                    Alert.alert(
                      `Prices on ${moment(date).format("MMMM DD, yyyy")}`,
                      `\n\nLow Price: ${lowPrice}\n\nClosing Price: ${closingPrice}\n\nHight Price: ${hightPrice}`
                    );
                  },
                },
              },
            ]}
          />
          <VictoryBar
            barWidth={15}
            data={hightData}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: (evt, pressedProps) => {
                    const index = pressedProps.index;
                    const date = lowData[index].x;
                    const lowPrice = lowData[index].price;

                    const closingPrice = closingData[index].price;

                    const hightPrice = closingData[index].price;

                    Alert.alert(
                      `Prices on ${moment(date).format("MMMM DD, yyyy")}`,
                      `\n\nLow Price: ${lowPrice}\n\nClosing Price: ${closingPrice}\n\nHight Price: ${hightPrice}`
                    );
                  },
                },
              },
            ]}
          />
        </VictoryStack>
      </VictoryChart>

      <LabelsContainer>
        <LabelContainer>
          <LabelColor background={hightColor} />
          <LabelText>{hightLabel}</LabelText>
        </LabelContainer>

        <LabelContainer>
          <LabelColor background={closingColor} />
          <LabelText>{ClosingLabel}</LabelText>
        </LabelContainer>

        <LabelContainer>
          <LabelColor background={lowColor} />
          <LabelText>{LowLabel}</LabelText>
        </LabelContainer>
      </LabelsContainer>
    </Container>
  );
};

export default StockHistoryChart;
