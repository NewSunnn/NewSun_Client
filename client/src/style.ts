import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
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
