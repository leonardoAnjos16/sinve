import api from '../configs/axiosConfig';

import type { HistoryDataType } from '../../components/Table';

export const getData = (data: any): HistoryDataType[] => {
  const historyData: HistoryDataType[] = [];
  Object.entries(data).forEach(([key, value]: any, index) => {
    historyData.push({
      key: `${index}`,
      item: (`0000${index + 1}`).slice(-4),
      product: value.nome,
      inventory: value.quantidade,
      idealInventory: value.estoqueIdeal,
      category: value.categoria,
    });
  });
  return historyData;
};

export const HistoryAPI = {
  async getProducts() {
    const response = await api.request({
      url: '/estoque-ideal',
      method: 'GET',
    });
    return response.data;
  },
};
