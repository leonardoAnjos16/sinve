import React from 'react';
import { Arrow } from '../../assets/icons';
import {
  Container, Title, ContentContainer,
} from './style';

interface ProductHistoryProps {
  width: string
}

export const ProductHistory: React.FC<ProductHistoryProps> = ({ width }) => (
  <Container width={width}>

    <ContentContainer>
      <Title>Histórico de produto</Title>
      <Arrow />
    </ContentContainer>

  </Container>
);
