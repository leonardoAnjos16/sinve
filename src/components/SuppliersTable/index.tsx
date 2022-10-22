import React from 'react';
import { Table } from 'antd';

interface Props {
  suppliers: any[];
}

export const SuppliersTable: React.FC<Props> = ({ suppliers }) => {
  const columns = [
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
      width: '17%',
    },
    {
      title: 'Nome Fantasia',
      dataIndex: 'name',
      key: 'name',
      width: '46%',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      width: '22%',
    },
    {
      title: 'Prazo de entrega',
      dataIndex: 'delivery',
      key: 'delivery',
      width: '15%',
    },
  ];

  const data = suppliers.map(({
    CNPJ,
    nomeFantasia,
    telefone,
    prazoEntrega,
  }, index) => ({
    key: `${index}`,
    cnpj: CNPJ,
    name: nomeFantasia,
    phone: telefone,
    delivery: `${prazoEntrega} dias`,
  }));

  return (
    <Table style={{ width: '100%' }} columns={columns} dataSource={data} />
  );
};
