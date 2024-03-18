import {ButtonProps} from '@/interfaces/button';
import * as S from './Button.styled';

export const Button = (props: ButtonProps) => {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      radious={props.radious}
      onClick={props.onClick}
      background={props.background}
      backgroundColor={props.backgroundColor}
      disabled={props.disabled}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.children}
    </S.Button>
  );
};
