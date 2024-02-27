import * as S from './MainBox.styled';

interface NewsProps {
  children?: React.ReactNode;
}

export const MainBox = ({children}: NewsProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
