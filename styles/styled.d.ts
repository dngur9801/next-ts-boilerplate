import 'styled-components';
import {
  FontSizesTypes,
  DeviceSizesTypes,
  DeviceTypes,
  DeviceWrapSizesTypes,
  ColorsTypes,
  FontWeightsTypes,
  CalcRemTypes,
  BackgroundColorsTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizesTypes;
    fontWeights: FontWeightsTypes;
    deviceSizes: DeviceSizesTypes;
    device: DeviceTypes;
    deviceWrapSizes: DeviceWrapSizesTypes;
    colors: ColorsTypes;
    calcRem: CalcRemTypes;
    backgroundColors: BackgroundColorsTypes;
  }
}
