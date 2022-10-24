import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  padding-bottom: 40px !important;

  gap: 28px;
`;

export const RegisterContainer = styled.div`
  height: fit-content;
  width: 75%;
  margin: 0 auto !important;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 51px;
  margin-top: 16px !important;
  color: ${(props) => props.theme.colors.pineTree};
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-top: 28px !important;
`;

export const TopProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto !important;
  margin-top: 40px !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 260px;
`;

export const TitleIconButton = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Multiplier = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
`;

export const BoxUnitsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
