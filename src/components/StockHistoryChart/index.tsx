import React from "react";

// Libs
import {
  VictoryStack,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryZoomContainer,
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
  startDate: Date;
  endDate: Date;
  hightData: { x: Date; y: number }[];
  closingData: { x: Date; y: number }[];
  lowData: { x: Date; y: number }[];
  hightLabel: string;
  ClosingLabel: string;
  LowLabel: string;
  zoomDomain?: number;
  hightColor?: string;
  closingColor?: string;
  lowColor?: string;
}

const StockHistoryChart: React.FC<IStackChart> = ({
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
        domain={{ x: [startDate, endDate] }}
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
                    const price = lowData[index].y;
                    Alert.alert(
                      "Low price",
                      `Date: ${moment(date).format(
                        "DD/MM/yyyy"
                      )}\nPrice: ${price}`
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
                    const date = closingData[index].x;
                    const price = closingData[index].y;
                    Alert.alert(
                      "Closing price",
                      `Date: ${moment(date).format(
                        "DD/MM/yyyy"
                      )}\nPrice: ${price}`
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
                    const date = hightData[index].x;
                    const price = hightData[index].y;
                    Alert.alert(
                      "Hight price",
                      `Date: ${moment(date).format(
                        "DD/MM/yyyy"
                      )}\nPrice: ${price}`
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
