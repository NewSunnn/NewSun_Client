import React from 'react';
import * as S from './PageLayout.styled';

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({children}: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>NewSun</S.Header>
        <S.Body>{children}</S.Body>
      </S.Wrapper>
    </>
  );
};
