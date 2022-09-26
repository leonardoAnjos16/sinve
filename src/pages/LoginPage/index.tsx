import { SinveLoginLogo } from '../../assets/icons';
import LoginForm from '../../components/LoginForm';
import { LoginBackground } from './style';

const LoginPage = () => (
  <LoginBackground>
    <SinveLoginLogo />
    <LoginForm />
  </LoginBackground>
);

export default LoginPage;
