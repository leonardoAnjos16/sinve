import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 14px;
`;

export const CopyrightText = styled.span`
  color: ${({ theme }) => theme.colors.pineTree};
`;

export const InfoButton = styled.button`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 100px;
  bottom: 15px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
`;
