import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem;
  color: #f7f7f7;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 2rem;
  list-style-type: square;
  word-break: break-all;
`;

const ToDoItem = (props) => {
  <div
    onClick={() => {
      props.onChecked(props.id);
    }}
  >
    <ListWrapper>{props.text}</ListWrapper>
  </div>
  ;
}

export default ToDoItem;