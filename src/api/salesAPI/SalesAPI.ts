import type { DataType } from '../../utils/typings/unionTypes';
import api from '../configs/axiosConfig';

export const SalesAPI = {
  async getDataByCategory(filter: DataType) {
    const response = await api.request({
      url: '/vendas',
      method: 'GET',
      params: {
        filter,
      },
    });

    return response.data;
  },
  async getSalesPerDay() {
    const response = await api.request({
      url: '/vendas-por-dia',
      method: 'GET',
    });

    return response.data;
  },
  async getBilling() {
    const response = await api.request({
      url: '/faturamento',
      method: 'GET',
    });

    return response.data;
  },
};
