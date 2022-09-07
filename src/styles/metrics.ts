import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  fontSizeLow: 16,
  fontSizeMedium: 18,
  fontSizeHigh: 24,
  baseMargin: 20,
  basePadding: 20,
  baseRadiusLow: 15,
  baseRadiusMedium: 20,
  baseRadiusHigh: 500,
  baseIconsLow: 20,
  baseIconsMedium: 26,
  baseIconsHigh: 36,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
