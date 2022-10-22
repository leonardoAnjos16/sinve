/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { InputSinve } from '..';
import {
  RegisterFormWrapper,
  RegisterButton,
  VerificationCodeWrapper,
  VerificationCodeButton,
  ButtonWrapper,
} from './style';

const RegisterForm = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <RegisterFormWrapper>
        <InputSinve width="360px" placeholder="Nome" />
        <InputSinve width="360px" placeholder="Email" />
        <InputSinve type="password" width="360px" placeholder="Senha" />
        <InputSinve width="360px" placeholder="Telefone" />
        <VerificationCodeWrapper>
          <InputSinve width="222px" placeholder="Código de verificação" />
          <VerificationCodeButton>Solicitar</VerificationCodeButton>
        </VerificationCodeWrapper>
      </RegisterFormWrapper>
      <ButtonWrapper>
        <RegisterButton
          onClick={() => console.log('login')}
        >
          Registrar
        </RegisterButton>
      </ButtonWrapper>
    </>
  );
};

export default RegisterForm;
