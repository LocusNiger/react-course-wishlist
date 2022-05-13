import * as React from 'react';
import PropTypes from 'prop-types';

function WishlistItem({ wishes }) {
  return (
    <div className="wish-container">
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li key={text}>
            <label
              htmlFor={`wish${i}`}
              className={`wish-list__item ${done ? 'wish-completed' : ''}`}
            >
              <input id={`wish${i}`} type="checkbox" checked={done} />
              {text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

WishlistItem.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
    }),
  ),
};
WishlistItem.defaultProps = {
  wishes: [],
};

export default WishlistItem;
