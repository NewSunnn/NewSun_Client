import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultColorKey = 'white' | 'black' | 'main' | 'sub';

  export interface DefaultTheme {
    colors: {
      [key in DefaultColorKey]: string;
    };
    boxShadow: string;
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
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
};
export default theme;
