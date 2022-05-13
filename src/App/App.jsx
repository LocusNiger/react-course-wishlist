/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './App.css';
import WishlistInput from './WishlistInput';
import WishlistItem from './WishlistItem';

/* array con los deseos iniciales */
const initialWishes = [
  { text: 'Travel to Europe', done: false },
  { text: 'Get a great job soon', done: false },
  { text: 'Become independent', done: false },
  { text: 'Continue learning React', done: true },
];

const App = () => {
  /* useState para ir agregando los nuevos deseos */
  /* por defecto agarra los deseos iniciales */
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="App">
      <h1 className="app-title">My wishlist</h1>
      {/* como 1er. parámetro le llega el deseo */}
      {/* El setter crea un nuevo array con todos los deseos + el nuevo */}
      <WishlistInput onNewWish={(wish) => setWishes([...wishes, wish])} />
      {/* A la lista le mando el getter (incluye los iniciales) */}
      <WishlistItem wishes={wishes} />
      <button type="button" className="wish-archive-btn">
        Archive done
      </button>
    </div>
  );
};

export default App;
