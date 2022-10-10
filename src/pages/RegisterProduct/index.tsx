import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve, InputSinve, Navbar, HiddenInformation, ShowProductHistory,
} from '../../components';
import { ShowProvider } from '../../components/ShowProvider';
import {
  RegisterContainer, Title, ProductContainer, TopProductContainer, Container, ButtonContainer,
} from './style';

export const RegisterProduct: React.FC = () => {
  const history = useHistory();
  const [showHistory, setShowHistory] = useState(false);
  const [showProvider, setShowProvider] = useState(false);

  const didUserTapShowProductHistory = () => {
    setShowHistory(!showHistory);
  };

  const didUserTapGoBackInventory = () => {
    history.goBack();
  };

  const didUserTapShowProvider = () => {
    setShowProvider(!showProvider);
  };

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Title>Cadastro de Produto</Title>
        <ProductContainer>

          <TopProductContainer>
            <InputSinve width="18%" title="Código do item" withMargin />
            <InputSinve width="45%" title="Produto" withMargin />
            <InputSinve width="20%" title="Categoria" withMargin />
            <InputSinve width="20%" title="Quantidade" withMargin />
          </TopProductContainer>

          <TopProductContainer>
            <InputSinve width="25%" title="Data de Entrada" isSelectDate withMargin />
            <InputSinve width="25%" title="Data de Validade" isSelectDate withMargin />
            <InputSinve width="25%" title="Preço de Venda" withMargin />
            <InputSinve width="25%" title="Preço de Compra" withMargin />
          </TopProductContainer>

        </ProductContainer>
      </RegisterContainer>

      {
        showProvider ? <ShowProvider width="75%" onClick={didUserTapShowProvider} /> : (
          <HiddenInformation
            width="75%"
            onClick={didUserTapShowProvider}
            title="Informações do fornecedor"
          />
        )
      }

      {
        showHistory ? <ShowProductHistory width="75%" onClick={didUserTapShowProductHistory} />
          : <HiddenInformation width="75%" onClick={didUserTapShowProductHistory} title="Histórico de produto" />
      }
      <ButtonContainer>
        <ButtonSinve title="Voltar" onClick={didUserTapGoBackInventory} />
        <ButtonSinve title="Cadastrar produto" />
      </ButtonContainer>
    </Container>

  );
};
