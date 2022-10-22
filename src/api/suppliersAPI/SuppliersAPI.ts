import api from '../configs/axiosConfig';

export const SuppliersAPI = {
  async getSuppliers() {
    const response = await api.request({
      method: 'GET',
      url: '/fornecedor',
    });

    return response.data;
  },

  async registerSupplier(
    CNPJ: string,
    nomeFantasia: string,
    telefone: string,
    prazoEntrega: number,
  ) {
    const response = await api.request({
      method: 'POST',
      url: '/fornecedor',
      data: {
        CNPJ,
        nomeFantasia,
        telefone,
        prazoEntrega,
      },
    });

    return response.data;
  },
};
