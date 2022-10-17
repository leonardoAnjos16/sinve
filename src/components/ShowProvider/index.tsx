import React, { Dispatch, SetStateAction } from 'react';
import { ArrowUp } from '../../assets/icons';
import { Provider } from '../../interfaces/Provider';
import { InputSinve } from '../InputSinve';
import {
  Container, TitleContainer, Title, ContentContainer,
} from './style';

interface ShowProviderProps {
  width: string;
  onClick: Function;
  setStates: SetStates;
  states: States;
  providers?: Provider[];
}

interface SetStates {
  setCNPJ: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setDelivery: Dispatch<SetStateAction<string>>;
}

interface States {
  cnpj: string;
  providerName: string;
  timeToDelivery: string;
  providerPhone: string;
}

export const ShowProvider: React.FC<ShowProviderProps> = ({
  width, onClick, setStates, providers, states,
}) => {
  const didUserSelectCNPJ = (cnpj: string) => {
    const newProviders = providers?.filter((provider) => provider.CNPJ === cnpj);
    if (!newProviders) return;
    const newProvider = newProviders[0];
    setStates.setCNPJ(newProvider.CNPJ);
    setStates.setName(newProvider.nomeFantasia);
    setStates.setPhone(newProvider.telefone);
    setStates.setDelivery(String(newProvider.prazoEntrega));
  };

  return (
    <Container width={width}>
      <TitleContainer>

        <Title>Informações do fornecedor</Title>
        <ArrowUp
          style={{
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
      </TitleContainer>

      <ContentContainer>
        <InputSinve
          width="20%"
          title="CNPJ"
          withMargin
          setData={setStates.setCNPJ}
          isSelectable
          providers={providers}
          onSelect={didUserSelectCNPJ}
          data={states.cnpj}
        />
        <InputSinve
          width="35%"
          title="Nome Fantasia"
          withMargin
          setData={setStates.setName}
          data={states.providerName}
        />
        <InputSinve
          width="15%"
          title="Telefone"
          withMargin
          setData={setStates.setPhone}
          data={states.providerPhone}
        />
        <InputSinve
          width="30%"
          title="Prazo de entrega"
          withMargin
          setData={setStates.setDelivery}
          data={states.timeToDelivery}
        />
      </ContentContainer>

    </Container>

  );
};
