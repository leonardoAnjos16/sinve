import React from 'react';
import { ArrowUp } from '../../assets/icons';
import { InputSinve } from '../InputSinve';

import {
  Container, TitleContainer, Title, InfoContainer,
} from './style';

interface ShowProductHistoryProps {
  width: string
  onClick: Function;
}

export const ShowProductHistory: React.FC<ShowProductHistoryProps> = ({ width, onClick }) => (
  <Container width={width}>

    <TitleContainer>

      <Title>Histórico de produto</Title>
      <ArrowUp
        style={{
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    </TitleContainer>

    <>
      {
        [1, 2, 3, 4].map(() => (
          <InfoContainer>
            <InputSinve width="15%" title="Mês/Ano" isShowHistory />
            <InputSinve width="40%" title="Quantidade de entrada" isShowHistory />
            <InputSinve width="40%" title="Quantidade de saída" isShowHistory />
          </InfoContainer>
        ))
      }
    </>

  </Container>
);
