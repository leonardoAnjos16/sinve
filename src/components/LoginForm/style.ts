import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export const InputLogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25px !important;
  svg {
    width: 16px;
  height: 16px;
  }
`;

export const RememberCheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px !important;
  :checked::after {
    background-color: #c2cfb2;
  }
`;

export const LoginFormSubMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  align-items: center;
  justify-content: center;
  margin-top: 10px !important;
`;

export const RememberMeInput = styled.label`
  display: flex;
  align-items: center;
`;

export const ForgotPasswordLink = styled.a`
  color: #8B1A47;
`;
