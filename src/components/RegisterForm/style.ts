import styled from 'styled-components';

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 22px !important;
  width: 360px;
  height: 264px;
  input {
    height: 40px !important;
  }
`;

export const RegisterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.claret};
  color: white;
  border-radius: 4px;
  border: none;
  padding: 6px 15px;
  align-items: center;
  width: 100px;
  height: 40px;
  margin: 22px !important;
`;

export const VerificationCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const VerificationCodeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.claret};
  color: white;
  border-radius: 4px;
  border: none;
  padding: 6px 15px;
  align-items: center;
  width: 110px;
  height: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
