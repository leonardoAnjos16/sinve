import { SinveLoginLogo } from '../../assets/icons';
import LoginPageFooter from '../../components/LoginPageFooter';
import LoginRegisterSwitch from '../../components/LoginRegisterSwitch';
import { LoginBackground, SinveSlogan, LRSWrapper } from './style';

const LoginPage = () => (
  <LoginBackground>
    <SinveLoginLogo />
    <SinveSlogan>
      Slogan da Sinve!
    </SinveSlogan>
    <LRSWrapper>
      <LoginRegisterSwitch />
    </LRSWrapper>
    <LoginPageFooter />
  </LoginBackground>
);

export default LoginPage;
