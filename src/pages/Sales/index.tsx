import React from 'react';

import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

import './styles.css';

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

          <div className="main">
            <div className="top">
              <section className="first">
                <div className="first_div">
                  <div className="inside_first">
                    <div className="title">
                      <h3>Setembro 2022</h3>
                      <button type="button" className="info"> i</button>
                    </div>
                    <h2>R$ 126,560</h2>
                    <p> Em relação a Ago/22 12%</p>
                    <p> Em relação a Set/22 13%</p>
                  </div>
                  <p className="vendas"> Venda diária $R$ 12,423</p>
                </div>

                <div className="inside_second">
                  <div className="title">
                    <h3>Saída de produtos diária (últimos 30 dias)</h3>
                    <button type="button" className="info"> i</button>
                  </div>
                  <h2>39</h2>
                  <div className="one_graph">
                    <SalesAreaChart data={areaChartData} />
                  </div>
                </div>
                <p className="vendas">Saída de Produtos total (últimos 30 dias) 1,398</p>
              </section>
              <section className="second">

                <nav className="nav">
                  <h2>Vendas</h2>
                  <button type="button" className="button_second"> Sempre</button>
                  <button type="button" className="button1_second">Esse ano</button>
                  <button type="button" className="button2_second"> Últimos meses</button>
                </nav>

                <h2 className="val">R$ 126,560</h2>
                <div className="table_div">
                  <div className="graph">
                    <SalesPieChart data={pieCharData} />
                  </div>
                  <table className="table">
                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>

                    <tr>
                      <td>Categoria 1</td>
                      <td>28.79%</td>
                      <td>R$ 000</td>
                    </tr>
                  </table>
                </div>
              </section>
            </div>
            <section className="third">
              <div className="navtwo">
                <h2>Vendas por categoria</h2>
                <div className="button_div">
                  <button type="button" className="button_second">Sempre</button>
                  <button type="button" className="button1_second">Este ano</button>
                  <button type="button" className="button2_second">Últimos meses</button>
                  <select className="select">
                    <option> Ilhas</option>
                    <option>No idea</option>
                  </select>
                </div>
              </div>

              <div className="third_content">
                <div className="last_graph">
                  <SalesBarChart data={barChartData} />
                </div>
                <div className="last_table">
                  <table className="table">
                    <th>Produtos mais vendidos</th>
                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>

                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>
                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>

                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>

                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>

                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>

                    <tr>
                      <td> Produto N° 1</td>
                      <td>323,234</td>
                    </tr>
                  </table>
                </div>
              </div>

            </section>
          </div>
        </CardsContainer>
      </ElementsContainer>
    </Container>
  );
};
