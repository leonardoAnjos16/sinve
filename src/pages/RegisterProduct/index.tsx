import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/configs/axiosConfig';

import {
  ButtonSinve, InputSinve, Navbar, HiddenInformation, ShowProductHistory,
} from '../../components';
import { ShowProvider } from '../../components/ShowProvider';
import { Entrance } from '../../interfaces/Entrance';
import { Provider } from '../../interfaces/Provider';
import {
  RegisterContainer,
  Title,
  ProductContainer,
  TopProductContainer,
  Container,
  ButtonContainer,
  QuantityWrapper,
  TitleIconButton,
  Multiplier,
  BoxUnitsWrapper,
} from './style';

export const RegisterProduct: React.FC = () => {
  const history = useHistory();
  const [showHistory, setShowHistory] = useState(false);
  const [showProvider, setShowProvider] = useState(false);

  const [code, setCode] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [boxes, setBoxes] = useState('');
  const [units, setUnits] = useState('');
  const [inProduct, setInProduct] = useState('');
  const [validity, setValidity] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [providerName, setProviderName] = useState('');
  const [timeToDelivery, setTimeToDelivery] = useState<string>('');
  const [providerPhone, setProviderPhone] = useState('');

  const [providers, setProviders] = useState<Provider[]>([]);
  const [allEntrances, setAllEntrances] = useState<Entrance[]>([]);
  const [entrancesToShow, setEntrancesToShow] = useState<Entrance[]>([]);
  const [buttonText, setButtonText] = useState('Multiplicador');

  const didUserTapShowProductHistory = () => {
    setShowHistory(!showHistory);
  };

  const didUserTapGoBackInventory = () => {
    history.goBack();
  };

  const didUserTapShowProvider = () => {
    setShowProvider(!showProvider);
  };

  const didUserSelectValidity = (currentValidity: string) => {
    setValidity(currentValidity);
  };

  const didUserSelectInDate = (currentInDate: string) => {
    setInProduct(currentInDate);
  };

  const getProviders = async () => {
    try {
      const response = await api.get('/fornecedor');
      const { data } = response;
      const allProviders: Provider[] = data;
      setProviders(allProviders);
    } catch (error) {
      console.log(error);
    }
  };

  const getEntrances = async () => {
    try {
      const response = await api.get('/entradas');
      const entrances: Entrance[] = response.data;
      setAllEntrances(entrances);
    } catch (error) {
      console.log(error);
    }
  };

  const filterEntrancesByCode = () => {
    const filteredEntrances = allEntrances.filter((entrance) => entrance.codigo === code);
    setEntrancesToShow(filteredEntrances);
  };

  useEffect(() => {
    getProviders();
    getEntrances();
    filterEntrancesByCode();
  }, []);

  useEffect(() => {
    filterEntrancesByCode();
  }, [code]);

  const didUserTapRegisterProduct = async () => {
    try {
      const produto = {
        codigo: code,
        nome: productName,
        categoria: category,
        quantidade: Number(quantity),
        precoDeVenda: Number(salePrice),
        precoDeCompra: Number(purchasePrice),
        dataValidade: validity,
        dataEntrada: inProduct,
      };

      if (buttonText === 'Multiplicador') {
        produto.quantidade = Number(quantity);
      } else {
        produto.quantidade = Number(boxes) * Number(units);
      }

      const fornecedor = {
        CNPJ: cnpj,
        nomeFantasia: providerName,
        prazoEntrega: Number(timeToDelivery),
        telefone: providerPhone,
      };

      const newRegisterProduct = {
        produto, fornecedor,
      };

      await api.post('/cadastro-de-produto', newRegisterProduct);

      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (buttonText === 'Multiplicador') {
      setButtonText('Voltar');
    } else {
      setButtonText('Multiplicador');
    }
  };

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Title>Cadastro de Produto</Title>
        <ProductContainer>

          <TopProductContainer>
            <InputSinve
              width="25%"
              title="Código do item"
              withMargin
              placeholder="0000-0"
              setData={setCode}
            />
            <InputSinve
              width="45%"
              title="Produto"
              withMargin
              placeholder="Lápis"
              setData={setProductName}
            />
            <InputSinve
              width="30%"
              title="Categoria"
              withMargin
              placeholder="Papelaria"
              setData={setCategory}
            />
            <QuantityWrapper>
              <TitleIconButton>
                Quantidade
                <Multiplier
                  onClick={handleClick}
                >
                  {buttonText}
                </Multiplier>
              </TitleIconButton>
              {buttonText === 'Multiplicador' ? (
                <InputSinve
                  width="259px"
                  withMargin
                  placeholder="1000"
                  setData={setQuantity}
                />
              ) : (
                <BoxUnitsWrapper>
                  <InputSinve
                    width="35%"
                    withMargin
                    placeholder="5 Caixas"
                    setData={setBoxes}
                  />
                  X
                  <InputSinve
                    width="55%"
                    withMargin
                    placeholder="35 Unidades"
                    setData={setUnits}
                  />
                </BoxUnitsWrapper>
              )}
            </QuantityWrapper>
          </TopProductContainer>

          <TopProductContainer>
            <InputSinve
              width="25%"
              title="Data de Entrada"
              isSelectDate
              withMargin
              onSelect={didUserSelectInDate}
              setData={setInProduct}
            />
            <InputSinve
              width="25%"
              title="Data de Validade"
              isSelectDate
              withMargin
              onSelect={didUserSelectValidity}
              setData={setValidity}
            />
            <InputSinve
              width="25%"
              title="Preço de Venda"
              withMargin
              setData={setSalePrice}
              placeholder="R$ 0.00"
            />
            <InputSinve
              width="25%"
              title="Preço de Compra"
              withMargin
              setData={setPurchasePrice}
              placeholder="R$ 0.00"
            />
          </TopProductContainer>

        </ProductContainer>
      </RegisterContainer>

      {
        showProvider ? (
          <ShowProvider
            width="75%"
            onClick={didUserTapShowProvider}
            setStates={{
              setCNPJ: setCnpj,
              setDelivery: setTimeToDelivery,
              setName: setProviderName,
              setPhone: setProviderPhone,
            }}
            providers={providers}
            states={{
              cnpj, timeToDelivery, providerName, providerPhone,
            }}
          />
        ) : (
          <HiddenInformation
            width="75%"
            onClick={didUserTapShowProvider}
            title="Informações do fornecedor"
          />
        )
      }

      {
        showHistory ? <ShowProductHistory width="75%" onClick={didUserTapShowProductHistory} products={entrancesToShow} />
          : <HiddenInformation width="75%" onClick={didUserTapShowProductHistory} title="Histórico de produto" />
      }
      <ButtonContainer>
        <ButtonSinve title="Voltar" onClick={didUserTapGoBackInventory} />
        <ButtonSinve title="Cadastrar produto" onClick={didUserTapRegisterProduct} />
      </ButtonContainer>
    </Container>
  );
};
