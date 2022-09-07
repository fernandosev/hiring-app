import styled from "styled-components/native";
import MaskInput from "react-native-mask-input";
import { colors, metrics } from "~/styles";
import Icon from "~/components/Icon";

export const IContainer = styled.View<{ borderColor?: string | undefined }>`
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: flex-end;
  height: 55px;
`;

export const IContainerButton = styled.TouchableOpacity<{
  borderColor?: string | undefined;
}>`
  height: 55px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: flex-end;
`;

export const Input = styled.TextInput<{
  textArea?: boolean;
  textColor?: string;
}>`
  color: ${(props) => props.textColor ?? colors.secondaryText};
  font-size: ${metrics.fontSizeLow}px;
  flex: 1;
  justify-content: flex-end;
  height: ${(props) => (props.textArea ? "70%" : "auto")};
  padding: 0;
`;

export const InputWithMask = styled(MaskInput)<{ textColor?: string }>`
  color: ${(props) => props.textColor ?? colors.secondaryText};
  font-size: ${metrics.fontSizeLow}px;
  flex: 1;
  margin-bottom: 2px;
  padding: 0;
  padding-top: 15px;
`;

export const SmallTextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const SmallText = styled.Text`
  font-size: ${metrics.fontSizeLow}px;
  color: ${colors.secondaryText};
`;

export const Labels = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const InputIcon = styled(Icon).attrs<{ name: string; color?: string }>(
  (props) => {
    return {
      name: props.name,
      color: props.color || colors.grey2,
      size: metrics.baseIconsMedium,
    };
  }
)``;

export const Button = styled.TouchableHighlight`
  position: absolute;
  width: 100%;
  height: 100%;
`;
