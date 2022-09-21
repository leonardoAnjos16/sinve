import React from 'react';

import { InputSinve, Navbar } from '../../components';
import {
  RegisterContainer, Title, ProductContainer, TopProductContainer,
} from './style';

export const RegisterProduct: React.FC = () => (
  <>
    <Navbar />
    <RegisterContainer>
      <Title>Cadastro de Produto</Title>
      <ProductContainer>

        <TopProductContainer>
          <InputSinve width="23%" title="Item" />
          <InputSinve width="74.5%" title="Produto" />
        </TopProductContainer>

        <TopProductContainer>
          <InputSinve width="25%" title="Data de Entrada" isSelectDate />
          <InputSinve width="25%" title="Data de Validade" isSelectDate />
          <InputSinve width="25%" title="Quantidade" />
          <InputSinve width="25%" title="Preço por unidade" />
        </TopProductContainer>

        <Title>Informações do Fornecedor</Title>

        <TopProductContainer>
          <InputSinve width="25%" title="CNPJ" />
          <InputSinve width="50%" title="Nome Fantasia" />
          <InputSinve width="25%" title="Telefone" />
        </TopProductContainer>

      </ProductContainer>

    </RegisterContainer>
  </>
);
