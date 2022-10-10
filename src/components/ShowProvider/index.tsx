import React from 'react';
import { ArrowUp } from '../../assets/icons';
import { InputSinve } from '../InputSinve';
import {
  Container, TitleContainer, Title, ContentContainer,
} from './style';

interface ShowProviderProps {
  width: string;
  onClick: Function;
}

export const ShowProvider: React.FC<ShowProviderProps> = ({ width, onClick }) => (
  <Container width={width}>

    <TitleContainer>

      <Title>Informações do fornecedor</Title>
      <ArrowUp
        style={{
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    </TitleContainer>

    <ContentContainer>
      <InputSinve width="20%" title="CNPJ" withMargin />
      <InputSinve width="35%" title="Nome Fantasia" withMargin />
      <InputSinve width="15%" title="Telefone" withMargin />
      <InputSinve width="30%" title="Prazo de entrega" isSelectDate withMargin />
    </ContentContainer>

  </Container>
);
