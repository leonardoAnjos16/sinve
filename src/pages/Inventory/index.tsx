import React from 'react';

import {
  ButtonSinve,
  InputSearch, Navbar, TableComponent,
} from '../../components';
import {
  TopContainer, Container, ElementsContainer,
} from './style';

export const Inventory: React.FC = () => (
  <Container>
    <Navbar />
    <ElementsContainer>
      <TopContainer>
        <InputSearch width="573px" title="oq" />
        <ButtonSinve title="Cadastrar produto" margin="10px 0px 40px 0px" />
      </TopContainer>
      <TableComponent />
    </ElementsContainer>
  </Container>
);
