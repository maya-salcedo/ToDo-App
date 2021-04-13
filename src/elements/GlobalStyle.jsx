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

.container {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #303841;
  background-size: 25px 25px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box; 
  @media(max-width: 490px){
    max-width: 25rem;
  }
  @media(max-width: 427px){
    max-width: 22rem;
  }
  @media(max-width: 384px){
    max-width: 20rem;
  }
  @media(max-width: 344px){
    max-width: 18rem;
  }
  @media(max-width: 304px){
    max-width: 16rem;
  }
  @media(max-width: 304px){
    max-width: 14rem;
  }
}

.form input {
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.1rem;
  border: solid 3px transparent;
  border-bottom: dashed 4px #f6c90e;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  color: #f7f7f7;
  width: 22rem;
  margin-bottom: 20px;
  outline: none;
  @media(max-width: 528px){
    max-width: 20rem;
    font-size: 1.2rem;
  }
  @media(max-width: 515px){
    max-width: 19,5rem;
  }
  @media(max-width: 504px){
    max-width: 19rem;
  }
  @media(max-width: 496px){
    max-width: 17rem;
    font-size: 1.2rem;
  }
  @media(max-width: 427px){
    max-width: 16rem;
  }
  @media(max-width: 392px){
    max-width: 15rem;
    font-size: 1rem;
  }
  @media(max-width: 366px){
    max-width: 14rem;
    font-size: 0.8rem;
  }
  @media(max-width: 350px){
    max-width: 12rem;
    font-size: 0.8rem;
  }
  @media(max-width: 304px){
    max-width: 10rem;
    font-size: 0.7rem;
  }
}

button {
  padding: 5px;
  border: none;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 10%;
  color: #f6c90e;
  background-color: transparent;
  outline: none;
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

li {
  text-align: left;
  position: relative;
  padding: 0.5rem;
  color: #f7f7f7;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 2rem;
  list-style-type: square;
  word-break: break-all;
}

`;



export default GlobalStyle;