import { styled } from 'styled-components';

export const StyledRight = styled.div`
  grid-area: right;
  width: 20vw;
  background: rgb(242, 242, 242);
  color: rgb(72, 72, 72);
  font-size: large;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  & > * {
    padding: 1rem;
  }
`;