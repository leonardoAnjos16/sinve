import React, { useEffect } from 'react';
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
}) => {
  useEffect(() => {
    // console.log(products);
  }, [products]);

  return (
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

          products.map((product) => (
            <InfoContainer>
              <InputSinve isSelectDate title="" width="30%" />
              <Input
                style={{
                  width: '10%',
                }}
                disabled
                defaultValue={String(product.quantidade)}
              />
              <Input disabled defaultValue={product.nome} />
            </InfoContainer>
          ))
        }
      </>

    </Container>

  );
};
