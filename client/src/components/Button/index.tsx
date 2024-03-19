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
      disabled={props.disabled}
      color={props.color}
      fontSize={props.fontSize}
      type={props.type}
    >
      {props.children}
    </S.Button>
  );
};
