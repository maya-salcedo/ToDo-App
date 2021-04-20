import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

const ListWrapper = styled.ul`
  > li {
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

const TodoList = () => {

  const [list, setList] = useState([]);
 
  const getList = async () => {
    try {
      const { data } = await axios.get('http://localhost:9000/todoinput');
      setList(data);  
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteItem = async id => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:9000/todoinput/${id}`);
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  }; 

  useEffect(() => {
    getList();
  }, []);

  console.log(list);

  return (
    <div>
      <ListWrapper>
        {list.map(toDo => (
          <li key={toDo.id} onClick={() => deleteItem(toDo.id)}>
            {toDo.item}
          </li>
        ))}
      </ListWrapper>
    </div>
  )
}

export default TodoList;