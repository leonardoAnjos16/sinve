import { Provider } from './Provider';

export type Entrance = {
    _id: string;
    codigo: string;
    dataEntrada: string;
    dataValidade: string;
    fornecedor: Provider;
    nome: string;
    precoDeCompra: number;
    quantidade: number;
};
