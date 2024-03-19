import {PageLayout} from '@/components/PageLayout';
import {SelectBox} from '@/components/SelectBox';
import {CategoryBox} from '@/components/CategoryBox';
import {useState} from 'react';

export const Home = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleSelectBoxClick = () => {
    setShowCategory(true);
  };

  return (
    <PageLayout>
      {!showCategory ? (
        <SelectBox text="카테고리 고르기" onClick={handleSelectBoxClick} />
      ) : (
        <CategoryBox />
      )}
    </PageLayout>
  );
};
