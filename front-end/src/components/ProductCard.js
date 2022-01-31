import React, { useContext } from 'react';
import ContextProduct from '../utils/ProductsContext/ProductsContext';

const ProductCard = () => {
  const {
    products,
    increment,
    decrement,
    handleChange,
  } = useContext(ContextProduct);

  return (
    products.map(({ id, price, urlImage, name, count }) => (
      <div key={ id }>
        <div>
          <p data-testid={ `customer_products__element-card-price-${id}` }>
            { `R$ ${price}` }
          </p>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ urlImage }
            alt={ name }
          />
          <p
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </p>
        </div>
        <div>
          <button
            id={ id }
            type="button"
            onClick={ (e) => decrement(e) }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            id={ id }
            type="number"
            value={ count }
            onChange={ (e) => handleChange(e) }
            data-testid={ `customer_products__input-card-quantity--${id}` }
          />
          <button
            id={ id }
            data-testid={ `customer_products__button-card-add-item--${id}` }
            type="button"
            onClick={ (e) => increment(e) }
          >
            +
          </button>
        </div>
      </div>
    ))
  );
};

export default ProductCard;
