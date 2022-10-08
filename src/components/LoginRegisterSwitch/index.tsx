import { Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { SwitchWrapper, OptionsWrapper } from './style';

const LoginRegisterSwitch = () => (
  <SwitchWrapper>
    <OptionsWrapper>
      <Tabs
        defaultActiveKey="login"
      >
        <TabPane
          tab="Login"
          key="login"
        >
          <LoginForm />
        </TabPane>
        <TabPane
          tab="Registro"
          key="registro"
        >
          <RegisterForm />
        </TabPane>
      </Tabs>
    </OptionsWrapper>
  </SwitchWrapper>
);

export default LoginRegisterSwitch;
