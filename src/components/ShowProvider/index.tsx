import React, { Dispatch, SetStateAction } from 'react';
import { ArrowUp } from '../../assets/icons';
import { InputSinve } from '../InputSinve';
import {
  Container, TitleContainer, Title, ContentContainer,
} from './style';

interface ShowProviderProps {
  width: string;
  onClick: Function;
  states: SetStates;
}

interface SetStates {
  setCNPJ: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setDelivery: Dispatch<SetStateAction<string>>;
}

export const ShowProvider: React.FC<ShowProviderProps> = ({ width, onClick, states }) => (
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
      <InputSinve width="20%" title="CNPJ" withMargin setData={states.setCNPJ} />
      <InputSinve width="35%" title="Nome Fantasia" withMargin setData={states.setName} />
      <InputSinve width="15%" title="Telefone" withMargin setData={states.setPhone} />
      <InputSinve width="30%" title="Prazo de entrega" withMargin setData={states.setDelivery} />
    </ContentContainer>

  </Container>
);
