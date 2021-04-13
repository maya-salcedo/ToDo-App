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
}

.form input {
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.7rem;
  border: solid 3px transparent;
  border-bottom: dashed 4px #f6c90e;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  color: #f7f7f7;
  width: 22rem;
  margin-bottom: 20px;
  outline: none;
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
}

`;



export default GlobalStyle;