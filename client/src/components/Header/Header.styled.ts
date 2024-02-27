import styled from 'styled-components';

interface fontProps {
  size: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  height: 30px;
  padding-top: 5px;
  box-sizing: border-box;
`;

export const Title = styled.p<fontProps>`
  font-size: ${(props) => props.size};
  /* display: flex;
  justify-content: center; */
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  white-space: nowrap;
  gap: 0.5rem;
`;

export const Notice = styled.img`
  width: 30px;
  height: 30px;
`;
export const Menu = styled.img`
  width: 30px;
  height: 30px;
`;
