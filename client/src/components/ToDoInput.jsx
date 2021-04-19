import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ToDoItem from './ToDoItem';
import axios from "axios";

const InputWrapper = styled.input`
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
  `;

const ButtonWrapper = styled.button`
  padding: 5px;
  border: none;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 10%;
  color: #f6c90e;
  background-color: transparent;
  outline: none;
`;

const ToDoInput = () => {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const postTesting = async () => {
    try {
      await axios.post('http://localhost:9000/todoinput', {
        Item: inputText
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  // const addItem = () => {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //   });
  //   setInputText("");
  // };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <form onSubmit={postTesting}>
        <InputWrapper value={inputText} onChange={handleChange} type="text" placeholder="Write your to-do here" />
        <ButtonWrapper>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </ButtonWrapper>
      </form>
    <div>
      <ul>
        {items.map((toDoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={toDoItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  </div>
  );
}

export default ToDoInput;