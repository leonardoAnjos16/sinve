/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputSinve } from '..';
import { AvatarOutlined, Lock } from '../../assets/icons';
import {
  FormWrapper,
  InputLogoHolder,
  RememberCheckBox,
  LoginFormSubMenu,
  RememberMeInput,
  ForgotPasswordLink,
} from './style';

const LoginForm = () => {
  const handleCheckboxChange = () => {
    console.log('checkbox');
  };

  return (
    <FormWrapper>
      <InputLogoHolder>
        <AvatarOutlined />
        <InputSinve width="360px" placeholder="email" />
      </InputLogoHolder>
      <InputLogoHolder>
        <Lock />
        <InputSinve width="360px" placeholder="senha" />
      </InputLogoHolder>
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
  );
};

export default LoginForm;
