import LoginForm from '../LoginForm';
import { SwitchWrapper, OptionsWrapper, Option } from './style';

const LoginRegisterSwitch = () => {
  const activeOption = true;
  return (
    <SwitchWrapper>
      <OptionsWrapper>
        <Option
          active={activeOption}
        >
          Login
        </Option>
        <Option
          active={!activeOption}
        >
          Register
        </Option>
      </OptionsWrapper>
      <LoginForm />
    </SwitchWrapper>
  );
};

export default LoginRegisterSwitch;
