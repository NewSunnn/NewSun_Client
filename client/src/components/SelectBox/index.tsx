import * as S from './SelectBox.styled';
import Arrow from '@/assets/Arrow.svg';

interface Props {
  text: string;
}

const handleCategory = () => {
  console.log('test');
};

export const SelectBox = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Title size="20px">{props.text}</S.Title>
      <S.ArrowButton src={Arrow} onClick={() => handleCategory()} />
    </S.Wrapper>
  );
};
