import React from 'react';
import RegisterForm from '../../components/register/registerForm';
import { ReactComponent as Register } from '../../assets/img/illustrations/register_illustartion.svg';
import './register.styles.scss';
const RegisterPage = () => {
  console.log(Register);
  return (
    <div className="register-page-container">
      <div className="register-page-container__content">
        <div className="register-page-container__content__main">
          <RegisterForm />
          <div className="register-page-container__content__main__intro">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
