import * as S from './CategoryBox.styled';
import {CategoryProps} from '@/interfaces/categoryBox';

export const CategoryBox = (props: CategoryProps) => {
  return <S.Wrapper>{props.children}</S.Wrapper>;
};
