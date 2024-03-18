import styled from 'styled-components';
import theme from '@/theme';
import {ButtonProps} from '@/interfaces/button';

export const Button = styled.button<ButtonProps>`
  background: ${theme.colors.btnDefault};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: ${(props) => `${props.margin}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius: ${(props) => (props.radious ? `${props.radious}` : 0)};
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}px`};
`;
