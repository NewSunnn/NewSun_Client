import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultColorKey = 'white' | 'black' | 'main' | 'sub';

  export interface DefaultTheme {
    colors: {
      [key in DefaultColorKey]: string;
    };
  }
}

const colors = {
  white: '#ffffff',
  black: '#000000',
  main: '#f2efe5',
  sub: '#f5f5f5',
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
