import React from 'react';

import {
  Navbar, SalesPieChart,
} from '../../components';
import {
  CardsContainer, Container, ElementsContainer,
} from './style';

export const Sales: React.FC = () => (
  <Container>
    <Navbar />
    <ElementsContainer>
      <CardsContainer>
        <SalesPieChart data={[28.8, 21.4, 19.7, 14.8, 7.65, 7.65]} />
      </CardsContainer>
    </ElementsContainer>
  </Container>
);
