import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TodoItemType } from '../type/TodoItemType';

const ListWrapper = styled.ul`
  padding-inline-start: 30px;
  > li {
    text-align: left;
    position: relative;
    padding: 0.5rem;
    color: #f7f7f7;
    font-family: 'Nothing You Could Do', cursive;
    font-size: 2rem;
    list-style-type: square;
    word-break: break-all;
    cursor: pointer;
    @media (max-width: 528px) {
      font-size: 1.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;

const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoItemType[]>([]);

  const getList = async () => {
    try {
      const { data } = await axios.get<TodoItemType[]>('/api/todoinput');
      setList(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`/api/todoinput/${id.toString()}`);
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <ListWrapper>
        {list.map((item) => (
          <li key={item.id} onClick={() => deleteItem(item.id)}>
            {item.item}
          </li>
        ))}
      </ListWrapper>
    </div>
  );
};

export default TodoList;
