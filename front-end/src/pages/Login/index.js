import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorLogin from '../../components/ErroLogin';
import { doLogin } from '../../services/endpointAPI';
import validateEmail from '../../validations/validateEmail';

const messageError = 'Login e/ou senha inválidos';
const testId = 'common_login__element-invalid-email';
const testIdEmail = 'common_login__input-email';
const invalidPassword = 'common_login__input-password';
const testIdBtnLogin = 'common_login__button-login';
const testIdBtnRegister = 'common_login__button-register';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(true);

  const clickLoginButton = async () => {
    await doLogin(email, password);
  };

  useEffect(() => {
    const validateFields = () => {
      const six = 6;
      const validEmail = validateEmail(email);
      const resultButton = password.length >= six && validEmail;
      setLoginButton(resultButton);
    };
    validateFields();
  }, [email, password]);

  return (
    <div>
      <form>
        <label htmlFor="login">
          Login
          <input
            data-testid={ testIdEmail }
            type="email"
            id="email"
            placeholder="email@trybeer.com.br"
            onChange={ (e) => setEmail(e.target.value) }
            required
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            data-testid={ invalidPassword }
            type="password"
            id="senha"
            placeholder="*********"
            onChange={ (e) => setPassword(e.target.value) }
            required
          />
        </label>
        <button
          variant="primary"
          disabled={ !loginButton }
          onClick={ clickLoginButton }
          data-testid={ testIdBtnLogin }
          type="button"
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            data-testid={ testIdBtnRegister }
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
      <div hidden="MSG de erro vai aqui">
        <ErrorLogin dataTestIdError={ testId } message={ messageError } />
      </div>
    </div>
  );
}
