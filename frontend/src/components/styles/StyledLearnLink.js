import { styled } from 'styled-components';

export const StyledLearnLink = styled.div`
  min-width: 90vw;
  min-height: 100vh;
  display: grid;
  grid-template: 
    "nav main right";
  font-size: ${props => props.settings.fontSize ? `calc(1em * ${props.settings.fontSize})` : "1em"};
  letter-spacing: ${props => props.settings.letterSpacing ? `calc(1px * ${props.settings.letterSpacing})` : "1px"};
  word-spacing: ${props => props.settings.wordSpacing ? `calc(0.25rem * ${props.settings.wordSpacing})` : "0.25rem"};
  line-height: ${props => props.settings.lineHeight ? `${props.settings.lineHeight}` : "normal"};
  ${props => props.settings.isOpenDyslexic ? `font-family: "Open-Dyslexic";` : null}
`;