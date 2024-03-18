import {PageLayout} from '@/components/PageLayout';
import {SelectBox} from '@/components/SelectBox';
import {CategoryBox} from '@/components/CategoryBox';
import {Button} from '@/components/Button';
// import {MainBox} from '@/components/MainBox';

// CATEGORY_LIST 만큼 버튼 나열

export const Home = () => {
  return (
    <>
      <PageLayout
        children={
          <>
            <SelectBox text="카테고리 고르기" />
            <CategoryBox>
              <Button width={100} height={30} radious={'10px'}>
                테스트
              </Button>
              <Button width={100} height={30} radious={'10px'}>
                테스트
              </Button>
              <Button width={100} height={30} radious={'10px'}>
                테스트
              </Button>
            </CategoryBox>

            {/* <MainBox /> */}
            {/* <MainBox /> */}
          </>
        }
      ></PageLayout>
      {/* PageLayout childeren으로 Component 넘기기 */}
    </>
  );
};
