import React from 'react';

import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

export const SalesPage: React.FC = () => {
  const pieCharData = [
    { category: 'remedio', value: 28.8 },
    { category: 'pets', value: 21.4 },
    { category: 'eletros', value: 19.7 },
    { category: 'cozinha', value: 14.8 },
    { category: 'mesa', value: 7.65 },
    { category: 'banho', value: 7.65 },
  ];

  const barChartData = [
    { category: 'remedio', value: 770 },
    { category: 'calçados', value: 1170 },
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

  const areaChartData = [30, 24, 22, 19, 13, 9, 11, 14, 17, 22, 26, 24, 21, 23, 21,
    25, 30, 27, 18, 13, 9, 7, 13, 16, 11, 11, 17, 23, 20, 19];

  return (
    <Container>
      <Navbar />
      <ElementsContainer>
        <CardsContainer>
          <SalesPieChart data={pieCharData} />
          <SalesBarChart data={barChartData} />
          <SalesAreaChart data={areaChartData} />
        </CardsContainer>
      </ElementsContainer>
    </Container>
  );
};
