import styled from 'styled-components';
import theme from '@/theme';
import {FontProps} from '@/interfaces/font';

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${theme.colors.sub};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ArrowButton = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.p<FontProps>`
  font-size: ${(props) => props.size};
  margin: 0;
`;
