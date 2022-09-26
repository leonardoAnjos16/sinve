import React, { ChangeEvent, useState } from 'react';
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

import './styles.css';

export const SalesPage: React.FC = () => {
  const [selectedBarCategory, setBarCategory] = useState(0);
  const color = ['#1890FF', '#13C2C2', '#52C41A', '#FADB14', '#EB2F96', '#722ED1'];

  const pieCharData = [
    {
      color: '#1890FF', category: 'Remedio', percent: 15, value: 28.8,
    },
    {
      color: '#13C2C2', category: 'Pets', percent: 19, value: 21.4,
    },
    {
      color: '#52C41A', category: 'Eletros', percent: 10, value: 19.7,
    },
    {
      color: '#FADB14', category: 'Cozinha', percent: 5, value: 14.8,
    },
    {
      color: '#EB2F96', category: 'Mesa', percent: 51, value: 7.65,
    },
    {
      color: '#722ED1', category: 'Banho', percent: 23, value: 7.65,
    },
  ];

  const pieCharDataYear = [
    {
      color: '#1890FF', category: 'Remedio', percent: 19, value: 15.8,
    },
    {
      color: '#13C2C2', category: 'Pets', percent: 23, value: 22.4,
    },
    {
      color: '#52C41A', category: 'Eletros', percent: 8, value: 9.7,
    },
    {
      color: '#FADB14', category: 'Cozinha', percent: 31, value: 65.8,
    },
    {
      color: '#EB2F96', category: 'Mesa', percent: 10, value: 70.65,
    },
    {
      color: '#722ED1', category: 'Banho', percent: 12, value: 7.65,
    },
  ];

  const pieCharDataMonth = [
    {
      color: '#1890FF', category: 'Remedio', percent: 9, value: 10.8,
    },
    {
      color: '#13C2C2', category: 'Pets', percent: 25, value: 13.4,
    },
    {
      color: '#52C41A', category: 'Eletros', percent: 45, value: 98.7,
    },
    {
      color: '#FADB14', category: 'Cozinha', percent: 61, value: 10.8,
    },
    {
      color: '#EB2F96', category: 'Mesa', percent: 8, value: 65.65,
    },
    {
      color: '#722ED1', category: 'Banho', percent: 32, value: 7.65,
    },
  ];

  const barChartData = [
    {
      category: 'remedio',
      products: [
        { product: 'diazepan', value: 770 },
        { product: 'dipirona', value: 1170 },
        { product: 'mixidil', value: 820 },
        { product: 'omeprazol', value: 570 },
        { product: 'neosaldina', value: 372 },
        { product: 'allegra', value: 240 },
        { product: 'merthiolate', value: 128 },
      ],
    },
    {
      category: 'calçados',
      products: [
        { product: 'adidas power 123', value: 180 },
        { product: 'sandalia havaiana verão', value: 1100 },
        { product: 'tenis all star', value: 800 },
        { product: 'sandalia cartago', value: 980 },
        { product: 'tenis all jordan', value: 10 },
        { product: 'crocs', value: 5 },
        { product: 'havaiana com prego', value: 1000 },
      ],
    },
    {
      category: 'eletros',
      products: [
        { product: 'Samsung TV', value: 680 },
        { product: 'Samsung galaxy', value: 1170 },
        { product: 'PlayStation 5 super slim', value: 820 },
        { product: 'Pulsera galaxy watch', value: 570 },
        { product: 'Iphone 14s Pro max', value: 760 },
        { product: 'Ar-condicionado', value: 500 },
      ],
    },
    {
      category: 'cozinha',
      products: [
        { product: 'Conjunto facas', value: 180 },
        { product: 'Microondas', value: 478 },
        { product: 'air fryer', value: 1170 },
        { product: 'Liquidificador', value: 820 },
        { product: 'Espremedor de laranja', value: 570 },
        { product: 'Botijão de gás', value: 760 },
        { product: 'Frigideira antiaderente', value: 478 },
        { product: 'Escorredor', value: 900 },
        { product: 'Depurador de ar', value: 500 },
      ],
    },
    {
      category: 'pets',
      products: [
        { product: 'Coleira', value: 180 },
        { product: 'Ração', value: 478 },
        { product: 'Bolinha', value: 1170 },
        { product: 'Mordedor', value: 820 },
        { product: 'Arranhador', value: 570 },
        { product: 'Gaiola', value: 760 },
        { product: 'Casinha', value: 478 },
        { product: 'Comedouro', value: 978 },
      ],
    },
    {
      category: 'praia',
      products: [
        { product: 'Chapéu', value: 480 },
        { product: 'Protetor solar', value: 468 },
        { product: 'Bronzeador', value: 770 },
        { product: 'Boia', value: 420 },
        { product: 'Guarda-sol', value: 100 },
        { product: 'Caiaque', value: 60 },
        { product: 'Canga', value: 678 },
        { product: 'Óculos de sol', value: 930 },
        { product: 'Biquini', value: 1250 },
      ],
    },
  ];

  const areaChartData = [30, 24, 22, 19, 13, 9, 11, 14, 17, 22, 26, 24, 21, 23, 21,
    25, 30, 27, 18, 13, 9, 7, 13, 16, 11, 11, 17, 23, 20, 19];

  const [pieData, setPieData] = useState(pieCharData);
  const [pieAll, setPieAll] = useState(true);
  const [pieMonth, setPieMonth] = useState(false);
  const [pieYear, setPieYear] = useState(false);

  const changeToAll = () => {
    setPieAll(true);
    setPieMonth(false);
    setPieYear(false);
    setPieData(pieCharData);
  };

  const changeToMonth = () => {
    setPieAll(false);
    setPieMonth(true);
    setPieYear(false);
    setPieData(pieCharDataMonth);
  };

  const changeToYear = () => {
    setPieAll(false);
    setPieMonth(false);
    setPieYear(true);
    setPieData(pieCharDataYear);
  };
  const listBarProducts = barChartData[selectedBarCategory].products.map((d, i) => (
    <tr className="table-line">
      <td className="table-line-number">{i + 1}</td>
      <td>{d.product}</td>
      <td>{d.value}</td>
    </tr>
  ));

  const handleBarCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setBarCategory(Number(e.target.value));
  };

  const listBarCategories = barChartData.map((d, i) => (
    <option value={i}>{d.category}</option>
  ));

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
                      <InfoCircleOutlined />
                    </div>
                    <h2>R$ 126,560</h2>
                    <div className="sale-by-time">
                      <p> Em relação a Ago/22 12% </p>
                      <CaretDownOutlined style={{ color: '#8B1A47' }} />
                    </div>
                    <div className="sale-by-time">
                      <p>Em relação a Set/22 13%</p>
                      <CaretUpOutlined style={{ color: '#8DB580' }} />
                    </div>
                  </div>
                  <p className="vendas"> Venda diária $R$ 12,423</p>
                </div>

                <div className="inside_second">
                  <div className="title">
                    <h3>Saída de produtos diária (últimos 30 dias)</h3>
                    <InfoCircleOutlined />
                  </div>
                  <h2>39</h2>
                  <div className="one_graph">
                    <SalesAreaChart data={areaChartData} />
                  </div>
                  <p className="vendas">Saída de Produtos total (últimos 30 dias) 1,398</p>
                </div>
              </section>
              <section className="second">

                <nav className="nav">
                  <h2>Vendas</h2>
                  <div className="nav-div">
                    <button type="button" className={pieAll ? 'button_second_active' : 'button_second'} onClick={() => changeToAll()}> Sempre</button>
                    <button type="button" className={pieYear ? 'button1_second_active' : 'button1_second'} onClick={() => changeToYear()}>Esse ano</button>
                    <button type="button" className={pieMonth ? 'button2_second_active' : 'button2_second'} onClick={() => changeToMonth()}> Últimos meses</button>
                  </div>
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
                          <td>
                            {' '}
                            <div
                              className="categoryEllipse"
                              style={{
                                width: '6px', height: '6px', backgroundColor: val.color, borderRadius: '100%', display: 'inline-block',
                              }}
                            />
                            {val.category}
                          </td>
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
                  <button type="button" className="button_second" style={{ color: '#8B1A47' }}>Sempre</button>
                  <button type="button" className="button1_second" style={{ color: '#CDCDCD', cursor: 'auto' }}>Este ano</button>
                  <button type="button" className="button2_second" style={{ color: '#CDCDCD', cursor: 'auto' }}>Últimos meses</button>
                  <select onChange={(e) => handleBarCategory(e)} className="select">
                    {listBarCategories}
                  </select>
                </div>
              </div>

              <div className="third_content">
                <div className="last_graph">
                  <SalesBarChart data={barChartData[selectedBarCategory].products} />
                </div>
                <div className="last_table">
                  <p className="last-table-list">Produtos mais vendidos</p>
                  <table className="table">
                    <tbody>
                      {listBarProducts}
                    </tbody>
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
