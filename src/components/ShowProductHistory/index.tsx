import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ArrowUp } from '../../assets/icons';
import { InputSinve } from '../InputSinve';

import {
  Container, TitleContainer, Title, InfoContainer,
} from './style';
import { Entrance } from '../../interfaces/Entrance';

interface ShowProductHistoryProps {
  width: string
  onClick: Function;
  products: Entrance[];
}

export const ShowProductHistory: React.FC<ShowProductHistoryProps> = ({
  width,
  onClick, products,
}) => (
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
        products.map(() => (
          <InfoContainer>
            <InputSinve isSelectDate title="" width="30%" />
            <Input style={{
              width: '10%',
            }}
            />
            <Input />
            <DeleteOutlined style={{
              cursor: 'pointer',
            }}
            />
          </InfoContainer>
        ))
      }
    </>

  </Container>
);
