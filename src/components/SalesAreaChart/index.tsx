import React, { useEffect } from 'react';
import * as d3 from 'd3';
import {
  Container,
} from './style';

interface SalesAreaChartProps {
  data: number[]
}

export const SalesAreaChart: React.FC<SalesAreaChartProps> = ({ data }) => {
  const width = 1000;
  const height = 0.1 * width;

  useEffect(() => {
    draw();
  }, [data]);

  function draw() {
    d3.select('#sales-area-chart')
      .select('svg')
      .remove();

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 39])
      .range([height, 0]);

    const svg = d3
      .select('#sales-area-chart')
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .append('g');

    const area = d3.area<number>()
      .curve(d3.curveMonotoneX)
      .x((d, i) => x(i))
      .y0(y(0))
      .y1((d) => y(d));

    svg.append('path')
      .datum(data)
      .attr('class', 'area-curve')
      .attr('d', area)
      .attr('fill', '#722ED1');
  }

  return (
    <Container id="sales-area-chart" />
  );
};
