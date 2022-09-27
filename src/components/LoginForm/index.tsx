/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputSinve } from '..';
import { AvatarOutlined, Lock } from '../../assets/icons';
import {
  FormWrapper,
  LoginInputLabel,
  InputLogoHolder,
  RememberCheckBox,
  LoginFormSubMenu,
  RememberMeInput,
  ForgotPasswordLink,
  LoginButton,
} from './style';

const LoginForm = () => {
  const handleCheckboxChange = () => {
    console.log('checkbox');
  };

  return (
    <>
      <FormWrapper>
        <LoginInputLabel>
          <InputLogoHolder>
            <AvatarOutlined />
            <InputSinve width="360px" placeholder="email" />
          </InputLogoHolder>
        </LoginInputLabel>
        <LoginInputLabel>
          <InputLogoHolder>
            <Lock />
            <InputSinve password width="360px" placeholder="senha" />
          </InputLogoHolder>
        </LoginInputLabel>
        <LoginFormSubMenu>
          <RememberMeInput
            htmlFor="rememberMe"
          >
            <RememberCheckBox
              type="checkbox"
              onClick={handleCheckboxChange}
              id="{rememberMe}"
            />
            Lembrar de mim
          </RememberMeInput>
          <ForgotPasswordLink>
            Esqueceu sua senha?
          </ForgotPasswordLink>
        </LoginFormSubMenu>
      </FormWrapper>
      <LoginButton
        onClick={() => console.log('login')}
      >
        Entrar
      </LoginButton>
    </>
  );
};

export default LoginForm;
