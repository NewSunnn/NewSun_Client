import * as S from './SelectBox.styled';
import Arrow from '@/assets/Arrow.svg';

interface Props {
  text: string;
  onClick: () => void;
}

export const SelectBox = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Title size="20px">{props.text}</S.Title>
      <S.ArrowButton src={Arrow} onClick={props.onClick} />
    </S.Wrapper>
  );
};
