import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve, InputSinve, Navbar, ProductHistory, ShowProductHistory,
} from '../../components';
import {
  RegisterContainer, Title, ProductContainer, TopProductContainer, Container, ButtonContainer,
} from './style';

export const RegisterProduct: React.FC = () => {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const history = useHistory();

  const didUserTapArrowButton = () => {
    setShowHistory(!showHistory);
  };

  const didUserTapGoBackInventory = () => {
    history.goBack();
  };

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Title>Cadastro de Produto</Title>
        <ProductContainer>

          <TopProductContainer>
            <InputSinve width="24%" title="Código de barra" />
            <InputSinve width="50.5%" title="Produto" />
            <InputSinve width="24%" isSelectable title="Categoria do Produto" />
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
            <InputSinve width="25%" title="Prazo de entrega" />
          </TopProductContainer>
        </ProductContainer>
      </RegisterContainer>

      {
        showHistory ? <ShowProductHistory width="69%" onClick={didUserTapArrowButton} />
          : <ProductHistory width="69%" onClick={didUserTapArrowButton} />
      }
      <ButtonContainer>
        <ButtonSinve title="Voltar" onClick={didUserTapGoBackInventory} />
        <ButtonSinve title="Cadastrar produto" />
      </ButtonContainer>
    </Container>

  );
};
