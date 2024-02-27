import React from 'react';
import * as S from './PageLayout.styled';
import {Header} from '../Header';

interface Props {
  children?: React.ReactNode;
}

export const PageLayout = ({children}: Props) => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Body>{children}</S.Body>
      </S.Wrapper>
    </>
  );
};
