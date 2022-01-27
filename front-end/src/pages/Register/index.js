import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerCustomerUser } from '../../services/endpointAPI';

const EMAIL_LENGTH = 12;
const PASSWORD_LENGTH = 6;

function Register() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [formValidation, setFormValidation] = useState(true);

  const navigate = useNavigate();

  const validateEmail = (userEmail) => {
    const emailRegexp = /\S+@\S+\.\S+/;
    return emailRegexp.test(userEmail);
  };

  const handleSubmit = async () => {
    const content = await registerCustomerUser({ name, email, password });

    if (content.message) {
      const errorMessage = document.querySelector('#error');
      errorMessage.innerHTML = content.message;
      errorMessage.style.display = 'block';
      return true;
    }

    return navigate('/login');
  };

  useEffect(() => {
    if (
      name.length >= EMAIL_LENGTH
      && password.length >= PASSWORD_LENGTH
      && validateEmail(email)
    ) {
      setFormValidation(false);
    } else {
      setFormValidation(true);
    }
  }, [name, email, password]);

  return (
    <main>
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              required
              minLength={ 12 }
              placeholder="Seu Nome"
              name="name"
              onChange={ ({ target }) => setName(target.value) }
              data-testid="common_register__input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              required
              placeholder="seu-email@site.com.br"
              name="email"
              onChange={ ({ target }) => setMail(target.value) }
              data-testid="common_register__input-email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              required
              minLength={ 6 }
              placeholder="Sua Senha"
              name="password"
              onChange={ ({ target }) => setPassword(target.value) }
              data-testid="common_register__input-password"
            />
          </label>
          <button
            type="button"
            data-testid="common_register__button-register"
            disabled={ formValidation }
            onClick={ handleSubmit }
          >
            CADASTRAR
          </button>
        </form>
        <p
          data-testid="common_register__element-invalid_register"
          id="error"
          style={ { display: 'none' } }
        >
          Error
        </p>
      </div>
    </main>
  );
}

export default Register;
