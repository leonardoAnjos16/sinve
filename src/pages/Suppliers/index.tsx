import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonSinve, Navbar, SuppliersTable } from '../../components';
import {
  PageContainer,
  ContentContainer,
  Header,
  Title,
  TableContainer,
} from './style';

import { SuppliersAPI } from '../../api/suppliersAPI/SuppliersAPI';

export const Suppliers: React.FC = () => {
  const history = useHistory();
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const getSuppliers = async () => {
      const data = await SuppliersAPI.getSuppliers();
      setSuppliers(data);
    };

    getSuppliers();
  }, []);

  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <Header>
          <Title>Fornecedores</Title>
          <ButtonSinve
            title="Cadastrar Fornecedor"
            margin="0px"
            onClick={() => {
              console.log('here');
              history.push('/registrar-fornecedor');
            }}
          />
        </Header>
        <TableContainer>
          <SuppliersTable suppliers={suppliers} />
        </TableContainer>
      </ContentContainer>
    </PageContainer>
  );
};
