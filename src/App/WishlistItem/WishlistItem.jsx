import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* onDoneChange le avisa al padre (App) que cambio el estado del 'done' */
// eslint-disable-next-line object-curly-newline
const WishlistItem = ({ text, done, id, onDoneChange }) => {
  <li
    className={classNames('wish-list__item', {
      'wish-list__item--done': done,
      /* classNames (lib) nos permite agregar clases 1/2nte expresion booleana */
      /* en este caso cuando done = true */
    })}
  >
    {/* capturo el valor del input (checked) */}
    <input
      id={id}
      checked={done}
      onChange={(e) => onDoneChange(e.target.checked)}
      type="checkbox"
    />
    <label htmlFor={id}>{text}</label>
  </li>;
};
/* Declaro las proptypes */
WishlistItem.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
      onDoneChange: PropTypes.func,
    }),
  ),
};
WishlistItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default WishlistItem;
