import styled from 'styled-components';
import theme from '@/theme';
import {ButtonProps} from '@/interfaces/button';

export const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    props.type ? `${theme.colors[props.type]}` : `${theme.colors.btnDefault}`};
  border: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius: ${(props) => (props.radious ? `${props.radious}` : 0)};
  /* color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}px`}; */
`;
