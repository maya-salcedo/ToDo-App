import React, { useState } from 'react';
import GlobalStyle from './elements/GlobalStyle';
import ToDoItem from './components/ToDoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return(
    <div>
      <GlobalStyle />
      <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={handleChange} type="text" placeholder="Write your to-do here" />
        <button onClick={addItem}>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </button>
      </div>
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
    </div>
  );
}

export default App;