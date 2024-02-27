import {PageLayout} from '@/components/PageLayout';
import {SelectBox} from '@/components/SelectBox';

export const Home = () => {
  return (
    <>
      <PageLayout children={<SelectBox text="카테고리 고르기" />}></PageLayout>
      {/* PageLayout childeren으로 Component 넘기기 */}
    </>
  );
};
