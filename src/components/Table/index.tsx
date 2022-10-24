/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import {
  Space, Table,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  Container, LinkCustom, Inventory, ArrowDown, ArrowUp, BadgeCustom,
} from './style';

import { getData, HistoryAPI } from '../../api/historyAP/HistoryAPI';
import '@fontsource/roboto-mono';

export interface HistoryDataType {
  key: string;
  item: string;
  product: string;
  inventory: number;
  idealInventory: number;
  category: string;
}

export interface TableComponentProps {
  filter: 'falta' | 'sobrando' | 'ideal' | null;
  setTypesOfCategory?: any;
  selectedCategory?: any;
}

const columns: ColumnsType<HistoryDataType> = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    render: (item) => <BadgeCustom style={{ background: '#C2CFB2', color: 'black', fontFamily: 'Roboto Mono' }} count={item} />,
  },
  {
    title: 'Produto',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Em estoque',
    dataIndex: 'inventory',
    key: 'inventory',
    render: (item, everything) => (
      <Inventory color={
        // eslint-disable-next-line no-nested-ternary
        everything.inventory > everything.idealInventory ? '#C1A8F8'
          : (everything.inventory < everything.idealInventory ? '#A8C3F8' : 'transparent')
      }
      >
        {item}
        {everything.inventory > everything.idealInventory && <ArrowUp />}
        {everything.inventory < everything.idealInventory && <ArrowDown />}
      </Inventory>
    ),
  },
  {
    title: 'Estoque Mínimo',
    dataIndex: 'idealInventory',
    key: 'idealInventory',
  },
  // {
  //   title: 'Data de Entrada',
  //   key: 'date',
  //   render: (_, record) => (
  //     <DatePicker style={{
  //       width: '100%',
  //     }}
  //     />
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <LinkCustom>Adicionar</LinkCustom>
      </Space>
    ),
  },
];
// const data: HistoryDataType[] = [
//   {
//     key: '1',
//     item: 1,
//     product: 'Sapato',
//     inventory: 1000,
//     idealInventory: 1200,
//   },
//   {
//     key: '2',
//     item: 2,
//     product: 'Máquina de lavar',
//     inventory: 1450,
//     idealInventory: 1500,
//   },
//   {
//     key: '3',
//     item: 3,
//     product: 'Suporte para notebook',
//     inventory: 2100,
//     idealInventory: 2100,
//   },
// ];

export const TableComponent: React.FC<TableComponentProps> = ({
  filter, setTypesOfCategory, selectedCategory,
}) => {
  const [data, setData] = useState<HistoryDataType[]>([]);
  const [dataFiltered, setDataFiltered] = useState<HistoryDataType[]>([]);

  useEffect(() => {
    HistoryAPI.getProducts()
      .then((result) => {
        setData(getData(result));
        setDataFiltered(getData(result));
      });
  }, []);

  useEffect(() => {
    let auxData;
    if (filter === 'falta') {
      auxData = data.filter((element) => element.inventory < element.idealInventory);
    } else if (filter === 'ideal') {
      auxData = data.filter((element) => element.inventory === element.idealInventory);
    } else if (filter === 'sobrando') {
      auxData = data.filter((element) => element.inventory > element.idealInventory);
    } else {
      auxData = data;
    }
    console.log(selectedCategory);
    if (selectedCategory && selectedCategory !== 'noFiltersChosen') {
      auxData = auxData.filter((element) => element.category === selectedCategory);
    }

    setDataFiltered(auxData);
  }, [filter, selectedCategory]);

  useEffect(() => {
    loadTypes();
  }, [data]);

  const loadTypes = async () => {
    const auxData: any[] = [{ label: 'Nenhum', value: 'noFiltersChosen' }];
    const auxKeys: any[] = [];
    // eslint-disable-next-line array-callback-return
    const wait = data.map((element) => {
      if (!auxKeys.includes(element.category)) {
        auxData.push({ label: element.category, value: element.category });
        auxKeys.push(element.category);
      }
    });
    await Promise.all(wait);
    setTypesOfCategory(auxData);
  };

  return (
    <Container>
      {data && <Table style={{ width: '100%' }} columns={columns} dataSource={dataFiltered} />}
    </Container>
  );
};
