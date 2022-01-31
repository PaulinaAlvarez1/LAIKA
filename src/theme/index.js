import {Platform} from 'react-native';

export const pallet = {
  laikaColor: '#653f90',
  primaryColor: '#a47dd0',
  secondaryColor: '#9b50b5',
  green: '#4fe8ba',
  yellowGold: '#ffc200',
  blueSky: '#6670e8',
  orange: '#ff6b00',
  white: '#fff',
  purpleVariant: '#8a5dbc',
  black: 'black',
  plum: '#bf93f1',
};

export const fonts = {
  bold: Platform.OS === 'android' ? 'AirbnbCerealMedium' : 'Arial',
  regular: Platform.OS === 'android' ? 'AirbnbCerealBook' : 'Arial',
};

// import {Platform} from 'react-native';

// export const PRIMARY_FONT =
//   Platform.OS === 'android' ? 'AirbnbCerealBook' : 'Arial';
// export const PRIMARY_FONT_MEDIUM =
//   Platform.OS === 'android' ? 'AirbnbCerealMedium' : 'Arial';
// export const PRIMARY_FONT_LIGHT =
//   Platform.OS === 'android' ? 'AirbnbCerealLight' : 'Arial';
// export const PRIMARY_COLOR = '#20c29d';
