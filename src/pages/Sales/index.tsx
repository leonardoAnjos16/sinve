import React, { useEffect, ChangeEvent, useState } from 'react';
import {
  InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined, ConsoleSqlOutlined,
} from '@ant-design/icons';
import {
  Navbar, SalesAreaChart, SalesPieChart, SalesBarChart,
} from '../../components';
import { CardsContainer, Container, ElementsContainer } from './style';

import { SalesAPI } from '../../api/salesAPI/SalesAPI';
import { getBarChartData, getPieChartData } from './functions';
import type { DataType } from '../../utils/typings/unionTypes';

import './styles.css';

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const SalesPage: React.FC = () => {
  const [selectedBarCategory, setBarCategory] = useState(0);

  const [productsPerCategory, setProductsPerCategory] = useState<DataType>('always');
  const [barChartData, setBarChartData] = useState<any[]>([]);

  const [areaChartData, setAreaChartData] = useState<number[]>([]);
  const [totalSalesLastMonth, setTotalSalesLastMonth] = useState<number>(0);

  const [pieChartData, setPieChartData] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<any>();
  const [totalSold, setTotalSold] = useState<any>();

  const [salesHistory, setSalesHistory] = useState<{month: string, year: string, perc: number}[]>();
  const [dailySales, setDailySales] = useState<number>();

  useEffect(() => {
    const salesHistoryAux: {month: string, year: string, perc: number}[] = [];
    const d = new Date();
    const actualMonth = d.getMonth();
    SalesAPI.getBilling()
      .then((result) => {
        result.forEach((salesPerMonth: number, index: number) => {
          if (index === 2) setDailySales(salesPerMonth);
          const salesDiff = salesPerMonth - result[result.length - 1];
          const monthAux = actualMonth - (2 - index);
          salesHistoryAux.push({
            month: monthAux < 0 ? months[months.length + monthAux - 1] : months[monthAux],
            year: monthAux < 0 ? (d.getFullYear() - 1).toString().substr(-2)
              : d.getFullYear().toString().substr(-2),
            perc: (salesDiff / (salesPerMonth || 1)) * 100,
          });
        });
        setSalesHistory(salesHistoryAux);
      });
  }, []);

  // Area Chart

  useEffect(() => {
    SalesAPI.getSalesPerDay()
      .then((result) => {
        setTotalSalesLastMonth(result.reduce((a: number, b: number) => a + b, 0));
        setAreaChartData(result);
      });
  }, []);

  // Bar Chart

  useEffect(() => {
    SalesAPI.getDataByCategory(productsPerCategory)
      .then((result) => {
        setBarChartData(getBarChartData(result));
      });
  }, [productsPerCategory]);

  useEffect(() => {
    SalesAPI.getDataByCategory(productsPerCategory)
      .then((res) => {
        setPieChartData(getPieChartData(res));
        setTotalAmount(getPieChartData(res).map((item) => item.amount)
          .reduce((prev, curr) => prev + curr, 0));
        setTotalSold(getPieChartData(res).map((item) => item.sold)
          .reduce((prev, curr) => prev + curr, 0));
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
                  {
                  salesHistory?.length
                  && (
                  <div className="inside_first">
                    <div className="title">
                      <h3>Setembro 2022</h3>
                      <InfoCircleOutlined />
                    </div>
                    <h2>
                      {dailySales!.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </h2>
                    <div className="sale-by-time">
                      <p>
                        {' '}
                        Em relação a
                        {' '}
                        {`${salesHistory![0].month}/${salesHistory![0].year}`}
                        {' '}
                        {`${Math.abs(salesHistory![0].perc)}%`}
                        {' '}
                      </p>
                      {
                        salesHistory![0].perc >= 0
                          ? <CaretDownOutlined style={{ color: '#8B1A47' }} />
                          : <CaretUpOutlined style={{ color: '#8DB580' }} />
                      }
                    </div>
                    <div className="sale-by-time">
                      <p>
                        {' '}
                        Em relação a
                        {' '}
                        {`${salesHistory![1].month}/${salesHistory![1].year}`}
                        {' '}
                        {`${Math.abs(salesHistory![1].perc)}%`}
                        {' '}
                      </p>
                      {
                        salesHistory![1].perc >= 0
                          ? <CaretDownOutlined style={{ color: '#8B1A47' }} />
                          : <CaretUpOutlined style={{ color: '#8DB580' }} />
                      }
                    </div>
                  </div>
                  )
                }
                  <p className="vendas">
                    {' '}
                    Venda diária
                    {' '}
                    {(dailySales! / 30).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>

                <div className="inside_second">
                  <div className="title">
                    <h3>Saída de produtos diária (últimos 30 dias)</h3>
                    <InfoCircleOutlined />
                  </div>
                  <h2>{areaChartData[areaChartData.length - 1]}</h2>
                  <div className="one_graph">
                    <SalesAreaChart data={areaChartData} />
                  </div>
                  <p className="vendas">
                    Saída de Produtos total (últimos 30 dias)
                    {' '}
                    {totalSalesLastMonth}
                  </p>
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

                <h2 className="val">
                  R$
                  {totalAmount}
                </h2>
                <div className="table_div">
                  <div className="graph">
                    <SalesPieChart
                      data={pieChartData.map(({ category, sold }) => ({
                        category,
                        value: sold / totalSold,
                      }))}
                    />
                  </div>
                  <table className="table">
                    <tbody>
                      {
                        pieChartData.map((val) => (
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
                              {Math.round((val.sold / totalSold) * 10000) / 100}
                              {' '}
                              %
                            </td>
                            <td>
                              R$
                              {val.amount}
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
