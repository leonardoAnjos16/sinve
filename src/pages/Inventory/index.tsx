import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve,
  InputSearch, Navbar, TableComponent,
} from '../../components';
import {
  TopContainer, Container, ElementsContainer,
} from './style';

export const Inventory: React.FC = () => {
  const history = useHistory();

  const didUserTapAddProduct = () => {
    history.push('/registrar-produto');
  };

  return (
    <Container>
      <Navbar />
      <ElementsContainer>
        <TopContainer>
          <InputSearch width="573px" title="oq" />
          <ButtonSinve title="Cadastrar produto" margin="0px 0px 0px 0px" onClick={didUserTapAddProduct} />
        </TopContainer>
        <TableComponent />
      </ElementsContainer>
    </Container>
  );
};
