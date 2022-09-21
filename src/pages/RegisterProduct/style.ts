import styled from 'styled-components';

export const RegisterContainer = styled.div`

  height: 480px;
  width: 75%;
  

  /* background-color: red; */
  margin: 0 auto !important;

  border-bottom: 2px solid black;
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
  height: 500px;

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
