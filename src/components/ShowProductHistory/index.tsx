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
