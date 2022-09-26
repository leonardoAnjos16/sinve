import React, { useMemo, useState } from 'react';

import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

import './styles.css';

export const SalesPage: React.FC = () => {
  const pieCharData = [
    { category: 'Remedio', percent: 15, value: 28.8 },
    { category: 'Pets', percent: 19, value: 21.4 },
    { category: 'Eletros', percent: 10, value: 19.7 },
    { category: 'Cozinha', percent: 5, value: 14.8 },
    { category: 'Mesa', percent: 51, value: 7.65 },
    { category: 'Banho', percent: 23, value: 7.65 },
  ];

  const pieCharDataYear = [
    { category: 'Remedio', percent: 19, value: 15.8 },
    { category: 'Pets', percent: 23, value: 22.4 },
    { category: 'Eletros', percent: 8, value: 9.7 },
    { category: 'Cozinha', percent: 31, value: 65.8 },
    { category: 'Mesa', percent: 10, value: 70.65 },
    { category: 'Banho', percent: 12, value: 7.65 },
  ];
  const pieCharDataMonth = [
    { category: 'Remedio', percent: 9, value: 10.8 },
    { category: 'Pets', percent: 25, value: 13.4 },
    { category: 'Eletros', percent: 45, value: 98.7 },
    { category: 'Cozinha', percent: 61, value: 10.8 },
    { category: 'Mesa', percent: 8, value: 65.65 },
    { category: 'Banho', percent: 32, value: 7.65 },
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

  const [pieData, setPieData] = useState(pieCharData);
  const [pieAll, setPieAll] = useState(true);
  const [pieMonth, setPieMonth] = useState(false);
  const [pieYear, setPieYear] = useState(false);

  const changeToAll = () => {
    console.log('dfs');
    setPieAll(true);
    setPieMonth(false);
    setPieYear(false);
    setPieData(pieCharData);
  };

  const changeToMonth = () => {
    console.log('teste');
    setPieAll(false);
    setPieMonth(true);
    setPieYear(false);
    setPieData(pieCharDataMonth);
  };

  const changeToYear = () => {
    console.log('chama');
    setPieAll(false);
    setPieMonth(false);
    setPieYear(true);
    setPieData(pieCharDataYear);
  };

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
                  <button type="button" className={pieAll ? 'button_second_active' : 'button_second'} onClick={() => changeToAll()}> Sempre</button>
                  <button type="button" className={pieYear ? 'button1_second_active' : 'button1_second'} onClick={() => changeToYear()}>Esse ano</button>
                  <button type="button" className={pieMonth ? 'button2_second_active' : 'button2_second'} onClick={() => changeToMonth()}> Últimos meses</button>
                </nav>

                <h2 className="val">R$ 126,560</h2>
                <div className="table_div">
                  <div className="graph">
                    <SalesPieChart data={pieData} />
                  </div>
                  <table className="table">
                    {
                      pieData.map((val) => (
                        <tr>
                          <td>{val.category}</td>
                          <td className="td_color">
                            {val.percent}
                            {' '}
                            %
                          </td>
                          <td>
                            R$
                            {val.value}
                          </td>
                        </tr>

                      ))
}
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
