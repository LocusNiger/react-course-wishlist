import React from 'react';
import PropTypes from 'prop-types';
import WishlistItem from './WishlistItem';

/* Esta lista es la que instancia c/u de los elem. que modificamos */
function WishList({ wishes, onWishesChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <WishlistItem
          text={text}
          done={done}
          id={`wish${i}`}
          key={text}
          onDoneChange={(value) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = value;
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}
WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(WishlistItem.propTypes)),
  onWishesChange: PropTypes.func,
};
WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
