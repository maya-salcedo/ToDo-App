import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: 'Source Code Pro', monospace;
  background-color: #000012;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
  margin: 0px;
  padding: 1rem 0;
  width: 100%;
  overflow-x: hidden;
  min-height: 70vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family: 'Permanent Marker', cursive;
  color: #f6c90e;
}

.icon {
  font-size: 200%;
  @media(max-width: 390px){
    font-size: 150%;
  }
}

.icon:hover {
  color: #f7f7f7;
}
`;



export default GlobalStyle;