import React, { useContext } from 'react';
import ProductsContext from '../../utils/ProductsContext/ProductsContext';
import ProductCard from '../ProductCard';

const ProductsCards = () => {
  const {
    products,
  } = useContext(ProductsContext);

  return (
    <>
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
    </>
  );
};

export default ProductsCards;
