import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export const LoginInputLabel = styled.label`
  display: block;
  height: 40px;
  margin-top: 22px !important;
  input {
    padding-left: 28px;
    height: 40px;
    ::placeholder{
      position: relative;
      left: -18px;
    }
  }
  svg {
    display: block;
    position: relative;
    width: 16px;
    height: 16px;
    left: 22px;
    top: -3px;
    margin-left: -22px !important;
  }
`;

export const InputLogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RememberCheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px !important;
  :checked::after {
    background-color: red;
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
  color: ${({ theme }) => theme.colors.claret};
  :hover {
    color: black;
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.claret};
  color: white;
  border-radius: 4px;
  border: none;
  padding: 6px 15px;
  align-items: center;
  width: 80px;
  height: 40px;
  margin: 22px !important;
`;
