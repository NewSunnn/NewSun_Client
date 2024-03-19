import * as S from './CategoryBox.styled';
import {Button} from '../Button';
import {CATEGORY_LIST} from '@/constants/category';
// import {CategoryProps} from '@/interfaces/categoryBox';

export const CategoryBox = () => {
  return (
    <S.Wrapper>
      <S.Title>카테고리를 선택해주세요.</S.Title>
      {CATEGORY_LIST.map((category) => (
        <Button key={category} width={30} height={20} radious={'30px'}>
          {category}
        </Button>
      ))}
      <Button width={35} height={20}>
        이전
      </Button>
      <Button width={35} height={20} type={'confirm'}>
        선택완료
      </Button>
    </S.Wrapper>
  );
};
