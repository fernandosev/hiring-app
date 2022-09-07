import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, metrics} from '~/styles';

export const IoniconsStyle = styled(Ionicons).attrs(
  (props: {name: string; color: string; size: number | string}) => {
    return {
      name: props.name,
      color: props.color ? props.color : colors.primaryText,
      size: props.size ? props.size : metrics.baseIconsLow,
    };
  },
)``;

export const MaterialCommunityIconsStyle = styled(MaterialCommunityIcons).attrs(
  (props: {name: string; color: string; size: number | string}) => {
    return {
      name: props.name,
      color: props.color ? props.color : colors.primaryText,
      size: props.size ? props.size : metrics.baseIconsLow,
    };
  },
)``;
