import * as S from './Header.styled';
import MenuImg from '@/assets/Menu.svg';
import NoticeImg from '@/assets/Notice.svg';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title size="20px">NewSun</S.Title>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <S.Notice src={NoticeImg} />
        <S.Menu src={MenuImg} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
