import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ProductsContext from '../../utils/ProductsContext/ProductsContext';
import formatPrice from '../../helpers';

import './ProductCard.css';

const ProductCard = ({ id, price, urlImage, name }) => {
  const {
    updateCart,
  } = useContext(ProductsContext);

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    updateCart(id, quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateCart(id, quantity - 1);
    }
  };

  const handleChange = ({ target: { value } }) => {
    if (value >= 0) {
      setQuantity(Number(value));
      updateCart(id, Number(value));
    }
  };

  return (
    <div key={ id } className="card-container">
      <div className="product-card-container">
        <div className="cat">
          <img
            className="card-image"
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ urlImage }
            alt={ name }
          />
        </div>
        <span
          className="card-text"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </span>
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          { formatPrice(price) }
        </span>
      </div>
      <div className="counter-container">
        <button
          className="btn-decrement"
          id={ id }
          type="button"
          onClick={ decrement }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className="counter"
          id={ id }
          type="number"
          value={ quantity }
          onChange={ handleChange }
          data-testid={ `customer_products__input-card-quantity--${id}` }
        />
        <button
          className="btn-increment"
          id={ id }
          data-testid={ `customer_products__button-card-add-item--${id}` }
          type="button"
          onClick={ increment }
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default ProductCard;
