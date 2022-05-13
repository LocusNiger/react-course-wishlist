import * as React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';

/* El componente recibe un prop 'onNewWish' (callback) */
function WishlistInput({ onNewWish }) {
  /* useState para guardar los nuevos deseos */
  const [newWishText, setNewWishText] = useState('');
  return (
    <fieldset className="new-wish-container">
      <legend className="wish-title">New wish</legend>
      <input
        className="wish-input"
        placeholder="Enter your wish here"
        id="input-wish"
        value={newWishText} /* el value del input es el getter del useState */
        onChange={(e) => setNewWishText(e.target.value)}
        /* cuando cambie, se actualiza el setter con el nuevo valor del input */
        /* onKeyUp para c/vez que toco 'Enter' se guarde el nuevo deseo */
        onKeyUp={(e) => {
          /* Si la tecla es 'Enter' y no es un string vacío => */
          if (e.key === 'Enter' && newWishText.length) {
            /* llamo a la función pasada como prop y le mando el deseo */
            /* por defecto el deseo no esta cumplido */
            onNewWish({ text: newWishText, done: false });
            /* Limpio el contenido del input */
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
}
/* Declaro las proptypes de las props */
WishlistInput.propTypes = {
  onNewWish: propTypes.func,
};
/* Por default es una función vacía */
WishlistInput.defaultProps = {
  onNewWish: () => {},
};
export default WishlistInput;
