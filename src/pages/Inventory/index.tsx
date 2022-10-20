import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve,
  InputSearch, Navbar, TableComponent,
  InputSinve,
} from '../../components';
import { CustomSelect } from '../../components/Select';
import {
  TopContainer, Container, ElementsContainer, MiddleContainer, BottomContainer,
  ButtonCustom, Text,
} from './style';

type Filters = 'falta' | 'sobrando' | 'ideal' | null;

export const Inventory: React.FC = () => {
  const history = useHistory();
  const [filter, setFilter] = useState<Filters>(null);
  const [typesOfCategory, setTypesOfCategory] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>('');

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
        <MiddleContainer>
          <Text>Selecione o Filtro:</Text>
          <CustomSelect
            width="20rem !important"
            setValue={setSelectedCategory}
            options={typesOfCategory}
            valueOptions={selectedCategory}
            marginLeft="10px !important"
          />
          {/* <ButtonCustom style={{ marginLeft: '10px !important' }}>Na média</ButtonCustom> */}
        </MiddleContainer>
        <BottomContainer>
          <Text>Ordenar por:</Text>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('falta'); }}>Estoque escasso</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('sobrando'); }}>Estoque sobrando</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter('ideal'); }}>Na média</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }} onClick={() => { setFilter(null); }}>Remover Filtro</ButtonCustom>
        </BottomContainer>
        <TableComponent
          filter={filter}
          setTypesOfCategory={setTypesOfCategory}
          selectedCategory={selectedCategory}
        />
      </ElementsContainer>
    </Container>
  );
};
