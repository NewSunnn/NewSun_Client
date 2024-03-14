import {PageLayout} from '@/components/PageLayout';
import {SelectBox} from '@/components/SelectBox';
import {MainBox} from '@/components/MainBox';
// import {CategoryBox} from '@/components/CategoryBox';

export const Home = () => {
  return (
    <>
      <PageLayout
        children={
          <>
            <SelectBox text="카테고리 고르기" />
            {/* <CategoryBox></CategoryBox> */}
            <MainBox />
            {/* <MainBox /> */}
          </>
        }
      ></PageLayout>
      {/* PageLayout childeren으로 Component 넘기기 */}
    </>
  );
};
