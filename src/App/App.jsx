/* eslint-disable react/function-component-definition */
import React from 'react';
import './App.css';

const wishes = [
  { text: 'Travel to Europe', done: false },
  { text: 'Get a great job soon', done: false },
  { text: 'Become independent', done: false },
  { text: 'Continue learning React', done: true },
];

const onClickAdd = () => {
  const inputValue = document.getElementById('input-wish').value;
  const newWish = {
    text: inputValue,
    done: false,
  };
  wishes.push(newWish);
};

const App = () => (
  <div className="App">
    {/* 'My wishlist' */}
    <h1 className="app-title">My wishlist</h1>
    {/* 'New wish */}
    <fieldset className="new-wish-container">
      <legend className="wish-title">New wish</legend>
      <input
        className="wish-input"
        placeholder="Enter your wish here"
        id="input-wish"
      />
      <button
        className="wish-btn"
        id="add-btn"
        type="submit"
        onClick={onClickAdd}
      >
        Add wish
      </button>
    </fieldset>
    {/* Contenedor de wishes */}
    <div className="wish-container">
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li>
            <label htmlFor={`wish${i}`} className="wish-list__item">
              <input id={`wish${i}`} type="checkbox" checked={done} />
              {text}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <button type="button" className="wish-archive-btn">
      Archive done
    </button>
  </div>
);

export default App;
