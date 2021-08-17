import colors from './colors';
import { ThemeType } from 'react-native-magnus';

const theme: ThemeType = {
  colors,
  shadowColor: '#323247',
  shadow: {
    '2dp': {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.06,
      shadowRadius: 4,

      elevation: 2,
    },
    '4dp': {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.06,
      shadowRadius: 8,

      elevation: 4,
    },
    '8dp': {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.06,
      shadowRadius: 16,

      elevation: 8,
    },
    '12dp': {
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.06,
      shadowRadius: 24,

      elevation: 12,
    },
    '16dp': {
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.06,
      shadowRadius: 32,

      elevation: 16,
    },
    '20dp': {
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 0.06,
      shadowRadius: 40,

      elevation: 20,
    },
    '24dp': {
      shadowOffset: {
        width: 0,
        height: 24,
      },
      shadowOpacity: 0.06,
      shadowRadius: 48,

      elevation: 24,
    },
    '32dp': {
      shadowOffset: {
        width: 0,
        height: 32,
      },
      shadowOpacity: 0.06,
      shadowRadius: 64,

      elevation: 32,
    },
  },
};

export default theme;
