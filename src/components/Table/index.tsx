import React from 'react';
import {
  Space, Table, Tag, DatePicker, Badge,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Container, LinkCustom, Inventory } from './style';

interface DataType {
  key: string;
  item: number;
  product: string;
  inventory: number;
  idealInventory: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    render: (item) => <Badge style={{ background: '#8B1A47' }} count={item} />,
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
      <Inventory isYellow={everything.inventory >= everything.idealInventory}>
        {item}
      </Inventory>
    ),
  },
  {
    title: 'Estoque Ideal',
    dataIndex: 'idealInventory',
    key: 'idealInventory',
  },
  {
    title: 'Data de Entrada',
    key: 'date',
    render: (_, record) => (
      <DatePicker style={{
        width: '100%',
      }}
      />
    ),
  },
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

const data: DataType[] = [
  {
    key: '1',
    item: 1,
    product: 'Nome do produto bem grande',
    inventory: 1000,
    idealInventory: 1200,
  },
  {
    key: '2',
    item: 2,
    product: 'Nome do produto',
    inventory: 1450,
    idealInventory: 1500,
  },
  {
    key: '3',
    item: 3,
    product: 'Nome do produto ainda maior para expandir',
    inventory: 2100,
    idealInventory: 2100,
  },
];

export const TableComponent: React.FC = () => (
  <Container>
    <Table style={{ width: '100%' }} columns={columns} dataSource={data} />
  </Container>
);
