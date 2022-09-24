import React, { useEffect } from 'react';
import * as d3 from 'd3';
import {
  Container,
} from './style';

interface ButtonSinveProps {
  data: number[]
}

export const SalesPieChart: React.FC<ButtonSinveProps> = ({ data }) => {
  const x = 2;
  const color = ['#1890FF', '#13C2C2', '#52C41A', '#FADB14', '#EB2F96', '#722ED1'];

  const width = 250;
  const height = width;
  const radius = width / 2;
  const donutWidth = 0.1 * width;

  useEffect(() => {
    draw();
  }, [data]);

  function draw() {
    const svg = d3
      .select('#sales-pie-chart')
      .append('svg')
      .attr('height', width)
      .attr('width', width)
      .append('g')
      .attr('transform', `translate(${radius}, ${radius})`);

    const arc = d3
      .arc()
      .innerRadius(radius - 25 - donutWidth)
      .outerRadius(radius - 25)
      .startAngle((d) => d.startAngle)
      .endAngle(((d) => d.endAngle));

    const pieG = d3
      .pie()
      .sort(null)
      .padAngle(0.04);

    const path = svg
      .selectAll('path')
      .data((d) => pieG(data))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', (d, i) => color[i]);
  }

  return (
    <Container>
      <div id="sales-pie-chart" />
    </Container>
  );
};
