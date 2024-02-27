import {createGlobalStyle} from 'styled-components';
import Jua from '@/assets/font/Jua-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Jua';
    src: url(${Jua}) format('truetype');
    font-weight: normal;
  } 

html, body {
  font-family: 'Jua';
  margin: 0;
}

html {
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding: 0;
  /**
  임의의 화면에서 393px, 852px에만 집중해서 볼 수 있도록 일부러 지정.
  임의 수정 X -> 추후 수정 예정
  */
}
body  {
    width: 393px;
    height: 852px;
  }
  #root {
    background-color: #f2efe5;
    height: 100%;
    width: 100%;
  }
`;
