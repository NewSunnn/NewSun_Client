import * as S from './Container.styled';

interface Props {
  text?: string;
}
const Container = ({text}: Props) => {
  return (
    <>
      <S.HeadContainer>{text}</S.HeadContainer>
    </>
  );
};

export default Container;
