import React, { useEffect, useState } from 'react';
import GlobalStyle from './elements/GlobalStyle';
import axios from 'axios';
import ToDoInput from './components/ToDoInput';


const App = () => {
  const [testing, setTesting] = useState();
 
  const getTesting = async () => {
    const {data} = await axios.get('http://localhost:9001/testServer');
    setTesting(data); 
  }

  useEffect(() => {
    getTesting();
  }, []);

  return(
    <div>
      <GlobalStyle />
      <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        <h2>{testing?.message}</h2>
      </div>
      <ToDoInput />
    </div>
    </div>
  );
}

export default App;