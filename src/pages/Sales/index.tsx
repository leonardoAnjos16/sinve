import React from 'react';

import { Navbar, SalesPieChart, SalesBarChart } from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

export const SalesPage: React.FC = () => {
  const barChartData = [
    { category: 'remedio', value: 770 },
    { category: 'calçado', value: 1170 },
    { category: 'eletros', value: 820 },
    { category: 'cozinha', value: 420 },
    { category: 'mesa', value: 570 },
    { category: 'banho', value: 420 },
    { category: 'pets', value: 600 },
    { category: 'computadores', value: 420 },
    { category: 'celulares', value: 820 },
    { category: 'acessorios', value: 820 },
    { category: 'jardim', value: 1190 },
    { category: 'praia', value: 980 },
  ];

  return (
    <Container>
      <Navbar />
      <ElementsContainer>
        <CardsContainer>
          <SalesPieChart data={[28.8, 21.4, 19.7, 14.8, 7.65, 7.65]} />
          <SalesBarChart data={barChartData} />
        </CardsContainer>
      </ElementsContainer>
    </Container>
  );
};
