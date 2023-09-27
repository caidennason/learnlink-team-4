import styled from 'styled-components';

export const StyledCard = styled.div`
  // Temporary styling
  background: linear-gradient(135deg, rgba(205,205,205,1) 0%, rgba(255,255,255,1) 100%);
  border: 1px solid black;
  border-radius: 10px;
  width: 15rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Open-Dyslexic", "Arial", "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // Temporary styling
  & img {
    width: 10rem;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;