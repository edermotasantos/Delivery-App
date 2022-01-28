import React, { useContext } from "react";
import ContextProduct from "../context/ContextProducts";


function ProductCard() {
  const { products } = useContext(ContextProduct);
  return ( 
    products.map(({ id, price, urlImage, name, }) => (
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
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
          >
            -
          </button>
          <input
            id={ id }
            type="number"
            value="0"
            data-testid={ `customer_products__input-card-quantity--${id}` }
          />
          <button
            id={ id }
            data-testid={ `customer_products__button-card-add-item--${id}` }
            type="button"
          >
            +
          </button>
        </div>
      </div>
    ))
  )
};

export default ProductCard;
