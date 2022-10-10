import React, { useEffect, ChangeEvent, useState } from 'react';
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

import { SalesAPI } from '../../api/salesAPI/SalesAPI';
import { getBarChartData } from './functions';
import type { DataType } from '../../utils/typings/unionTypes';

import './styles.css';

export const SalesPage: React.FC = () => {
  const [selectedBarCategory, setBarCategory] = useState(0);

  const [productsPerCategory, setProductsPerCategory] = useState<DataType>('always');
  const [barChartData, setBarChartData] = useState<any[]>([]);

  const [salesPerCategory, setSalesPerCategory] = useState<DataType>('always');

  useEffect(() => {
    SalesAPI.getDataByCategory(productsPerCategory)
      .then((result) => {
        setBarChartData(getBarChartData(result));
      });
  }, [productsPerCategory]);

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

  const listBarProducts = barChartData[selectedBarCategory]?.products.map((d: any, i: any) => (
    <tr className="table-line" key={`bar-chart-${d.product}`}>
      <td className="table-line-number">{i + 1}</td>
      <td>{d.product}</td>
      <td>{d.value}</td>
    </tr>
  ));

  const handleBarCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setBarCategory(Number(e.target.value));
  };

  const listBarCategories = barChartData.map((d, i) => (
    <option value={i} key={`bar-chart-option-${d.category}`}>{d.category}</option>
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
                    <tbody>
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
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <section className="third">
              <div className="navtwo">
                <h2>Vendas por categoria</h2>
                <div className="button_div">
                  <button type="button" className={productsPerCategory === 'always' ? 'button_second_active' : 'button_second'} onClick={() => setProductsPerCategory('always')}>Sempre</button>
                  <button type="button" className={productsPerCategory === 'year' ? 'button1_second_active' : 'button1_second'} onClick={() => setProductsPerCategory('year')}>Este ano</button>
                  <button type="button" className={productsPerCategory === 'last-months' ? 'button2_second_active' : 'button2_second'} onClick={() => setProductsPerCategory('last-months')}>Últimos meses</button>
                  <select onChange={(e) => handleBarCategory(e)} className="select">
                    {listBarCategories}
                  </select>
                </div>
              </div>

              <div className="third_content">
                <div className="last_graph">
                  {
                    barChartData[selectedBarCategory]
                    && <SalesBarChart data={barChartData[selectedBarCategory].products} />
                  }
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
