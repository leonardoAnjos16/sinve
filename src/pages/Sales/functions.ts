export const getBarChartData = (data: any) => {
  const barChartData: any[] = [];
  Object.entries(data.categorias).forEach(([key, value]: any) => {
    const products: any[] = [];
    Object.entries(value.produtos).forEach(([key2, value2]: any) => {
      products.push({
        product: key2,
        value: value2.quantidadeVendida,
      });
    });

    barChartData.push({
      category: key,
      products,
    });
  });

  return barChartData;
};

export const getPieChartData = (data: any) => {
  const pieChartData: any[] = [];
  Object.entries(data.categorias).forEach(([key, value]: any) => {
    pieChartData.push({
      category: key,
      sold: value.quantidadeVendida,
      amount: value.faturamento,
    });
  });
  return pieChartData;
};
