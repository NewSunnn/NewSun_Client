import * as S from './CategoryBox.styled';
import {useState} from 'react';
import {Button} from '../Button';
import {CATEGORY_LIST} from '@/constants/category';
import {CategoryProps} from '@/interfaces/categoryBox';

export const CategoryBox = (props: CategoryProps) => {
  const [buttonStates, setButtonStates] = useState(
    new Array(CATEGORY_LIST.length).fill(false),
  );

  const handleSelectButton = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <S.Wrapper>
      <S.Title>카테고리를 선택해주세요.</S.Title>
      {CATEGORY_LIST.map((category, index) => (
        <Button
          key={category}
          width={30}
          height={20}
          radius={'30px'}
          onClick={() => handleSelectButton(index)}
          state={buttonStates[index]}
        >
          {category}
        </Button>
      ))}
      <Button width={35} height={20} onClick={props.onClick}>
        이전
      </Button>
      <Button width={35} height={20} type={'confirm'}>
        선택완료
      </Button>
    </S.Wrapper>
  );
};
