import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  html {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
    padding: 5px;
    background: ${props => props.theme.background}
`;