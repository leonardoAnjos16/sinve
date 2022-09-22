import React from 'react';
import { Arrow } from '../../assets/icons';
import {
  Container, Title, ContentContainer,
} from './style';

interface ProductHistoryProps {
  width: string
  onClick: Function;
}

export const ProductHistory: React.FC<ProductHistoryProps> = ({ width, onClick }) => (
  <Container width={width}>

    <ContentContainer>
      <Title>Histórico de produto</Title>
      <Arrow
        onClick={onClick}
        style={{
          cursor: 'pointer',
        }}
      />
    </ContentContainer>

  </Container>
);
