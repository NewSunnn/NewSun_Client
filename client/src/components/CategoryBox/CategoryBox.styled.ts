import styled from 'styled-components';
import theme from '@/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  /* gap: 0.5vw; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.sub};
  box-shadow: ${theme.boxShadow};
  border-radius: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const Title = styled.div`
  width: 100%;
  padding-left: 10px;
`;
