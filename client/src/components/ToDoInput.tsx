import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const InputWrapper = styled.input`
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.1rem;
  border: solid 3px transparent;
  border-bottom: dashed 4px #f6c90e;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  color: #f7f7f7;
  width: 80%;
  margin-bottom: 20px;
  outline: none;
  @media (max-width: 528px) {
    max-width: 20rem;
    font-size: 1.3rem;
  }
  @media (max-width: 515px) {
    max-width: 19, 5rem;
  }
  @media (max-width: 504px) {
    max-width: 19rem;
  }
  @media (max-width: 496px) {
    max-width: 17rem;
  }
  @media (max-width: 427px) {
    max-width: 16rem;
    font-size: 1.2rem;
  }
  @media (max-width: 392px) {
    max-width: 15rem;
  }
  @media (max-width: 366px) {
    max-width: 14rem;
    font-size: 1rem;
  }
  @media (max-width: 350px) {
    max-width: 12rem;
    font-size: 0.8rem;
  }
  @media (max-width: 304px) {
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
  .icon {
    font-size: 200%;
    @media (max-width: 390px) {
      font-size: 150%;
    }
    &:hover {
      color: #f7f7f7;
    }
  }
`;

const ToDoInput: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const addItem = async () => {
    try {
      await axios.post('/api/todoinput', {
        Item: inputText,
      });
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <InputWrapper
          value={inputText}
          onChange={handleChange}
          type="text"
          placeholder="Write your to-do here"
        />
        <ButtonWrapper>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </ButtonWrapper>
      </form>
    </div>
  );
};

export default ToDoInput;
