import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve,
  InputSearch, Navbar, TableComponent,
} from '../../components';
import {
  TopContainer, Container, ElementsContainer, MiddleContainer, BottomContainer,
  ButtonCustom, Text,
} from './style';

type Filters = 'falta' | 'sobrando' | 'ideal' | null;

export const Inventory: React.FC = () => {
  const history = useHistory();
  const [filter, setFilter] = useState<Filters>(null);

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
        {/* <MiddleContainer>
          <Text>Selecione o Filtro:</Text>
          <ButtonCustom style={{ marginLeft: '10px !important' }}>Na média</ButtonCustom>
        </MiddleContainer> */}
        <BottomContainer>
          <Text>Ordenar por:</Text>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('falta'); }}>Estoque escasso</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('sobrando'); }}>Estoque sobrando</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('ideal'); }}>Na média</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter(null); }}>Remover Filtro</ButtonCustom>
        </BottomContainer>
        <TableComponent filter={filter} />
      </ElementsContainer>
    </Container>
  );
};
