import axios from 'axios';

const port = 3001;

const PORT = process.env.PORT || port;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const doLogin = async (email, password) => {
  try {
    const result = await api.post('/users/login', { email, password });
    return result.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
};

export const getUserByEmail = async (userEmail) => {
  const result = await api.post('/users/getUserByEmail', { userEmail });
  return result.data;
};

export const registerCustomerUser = async (newUser) => {
  const response = await api.post('/users/', newUser)
    .catch((error) => error.response);
  return response.data;
};

export const updateOrderStatus = async (status, id) => {
  await api.patch(
    `sales/${id}`,
    { status },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getOrderById = async (id) => {
  const response = await api.get(`/sales/${id}`)
    .catch((error) => error.response);
  return response.data;
};
