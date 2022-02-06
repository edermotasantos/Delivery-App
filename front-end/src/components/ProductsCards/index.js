import React, { useContext } from 'react';
import ProductsContext from '../../utils/ProductsContext/ProductsContext';
import ProductCard from '../ProductCard';
import './index.css';

const ProductsCards = () => {
  const {
    products,
  } = useContext(ProductsContext);

  return (
    <div className="cards-container">
      {
        products.map(({ id, price, urlImage, name }) => (
          <ProductCard
            key={ id }
            id={ id }
            price={ price }
            urlImage={ urlImage }
            name={ name }
          />
        ))
      }
    </div>
  );
};

export default ProductsCards;
