import {useState} from 'react';
import {MainBox} from '@/components/MainBox';
import {PageLayout} from '@/components/PageLayout';
import {SelectBox} from '@/components/SelectBox';
import {CategoryBox} from '@/components/CategoryBox';

export const Home = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleBox = () => {
    setShowCategory(!showCategory);
  };

  return (
    <PageLayout>
      {!showCategory ? (
        <SelectBox text="카테고리 고르기" onClick={handleBox} />
      ) : (
        <CategoryBox onClick={handleBox} />
      )}
      <MainBox />
      <MainBox />
    </PageLayout>
  );
};
