const fetchProducts = async (token) => {
  try {
    const response = await fetch('http://localhost:3001/products',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default fetchProducts;
