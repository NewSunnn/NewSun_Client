import styled from 'styled-components';
import theme from '@/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.sub};
  box-shadow: ${theme.boxShadow};
  border-radius: 10px;
`;
