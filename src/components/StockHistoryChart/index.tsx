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
          <VictoryBar data={lowData} />
          <VictoryBar data={closingData} />
          <VictoryBar data={hightData} />
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
