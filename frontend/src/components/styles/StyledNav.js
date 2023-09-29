import styled from 'styled-components';

export const StyledNav = styled.div`
  grid-area: nav;
  width: 20rem;
  background: rgb(242, 242, 242);
  color: rgb(72, 72, 72);
  font-size: 1em;
  font-weight: 500;
  display: flex;
  flex-direction: column;

  & > a {
    color: rgb(72, 72, 72);
    text-decoration: none;
  }

  & > * {
    padding: 1rem;
  }
`;