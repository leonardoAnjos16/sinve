import styled from 'styled-components';

export const ButtonStyled = styled.button`

  color: white;
  border-style: none;

  padding: 1rem 1.56rem;
  border-radius: 4px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  max-height: 60px;
  background-color: ${(props) => props.theme.colors.polarGreen};
  width: 238px;
  height: 58px;

  margin: 0 auto !important;
  margin-top: 40px !important;
`;
