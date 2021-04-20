import React from 'react';
import GlobalStyle from './elements/GlobalStyle';
import ContainerWrapper from './elements/ContainerWrapper';

import ToDoInput from './components/ToDoInput';
import TodoList from './components/ToDoList';


const App = () => {
  
  return(
    <div>
      <GlobalStyle />
      <ContainerWrapper>
      <div>
        <h1>To-Do List</h1>
      </div>
      <ToDoInput />
      <TodoList />
      </ContainerWrapper>
    </div>
  );
}

export default App;