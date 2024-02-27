import * as S from './SelectBox.styled';
import Arrow from '@/assets/Arrow.svg';

interface Props {
  text: string;
}

export const SelectBox = ({text}: Props) => {
  return (
    <S.Wrapper>
      <S.Title size="20px">{text}</S.Title>
      <S.ArrowButton src={Arrow} />
    </S.Wrapper>
  );
};
