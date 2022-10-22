import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonSinve, InputSinve, Navbar } from '../../components';
import {
  PageContainer,
  ContentContainer,
  Header,
  Title,
  FormContainer,
  ButtonContainer,
} from './style';

import { SuppliersAPI } from '../../api/suppliersAPI/SuppliersAPI';

export const RegisterSupplier: React.FC = () => {
  const history = useHistory();

  const [CNPJ, setCNPJ] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [telefone, setTelefone] = useState('');
  const [prazoEntrega, setPrazoEntrega] = useState('');

  const registerSupplier = async () => {
    await SuppliersAPI.registerSupplier(
      CNPJ,
      nomeFantasia,
      telefone,
      +prazoEntrega,
    );

    setCNPJ('');
    setNomeFantasia('');
    setTelefone('');
    setPrazoEntrega('');

    history.push('/fornecedores');
  };

  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <Header>
          <Title>Cadastrar Fornecedor</Title>
        </Header>
        <FormContainer>
          <InputSinve
            width="17%"
            title="CNPJ"
            withMargin
            placeholder="00.000.000/0001-00"
            setData={setCNPJ}
          />
          <InputSinve
            width="37%"
            title="Nome Fantasia"
            withMargin
            placeholder=""
            setData={setNomeFantasia}
          />
          <InputSinve
            width="17%"
            title="Telefone"
            withMargin
            placeholder="(00) 9 0000-0000"
            setData={setTelefone}
          />
          <InputSinve
            type="number"
            width="25%"
            title="Prazo de entrega"
            withMargin
            placeholder=""
            setData={setPrazoEntrega}
          />
        </FormContainer>
        <ButtonContainer>
          <ButtonSinve
            title="Cadastrar"
            margin="0px"
            onClick={() => registerSupplier()}
          />
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
};
