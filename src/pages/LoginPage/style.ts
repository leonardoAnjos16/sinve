import styled from 'styled-components';

export const LoginBackground = styled.div`
display: flex;
flex-direction: column;
  background-color: ${({ theme }) => theme.colors.laurelGreen};
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const SinveSlogan = styled.span`
  margin-top: 8px !important;
  color: rgba(0, 0, 0, 0.45);
`;

export const LRSWrapper = styled.div`
  display: flex;
  width: 360px;
  align-items: flex-start;
  padding: 7px 0;
`;
