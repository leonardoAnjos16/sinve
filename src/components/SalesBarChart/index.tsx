/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { select } from 'd3';
import { Container } from './style';

interface ChartData {
  product: string,
  value: number
}

interface SalesBarChartProps {
  data: ChartData[]
}

export const SalesBarChart: React.FC<SalesBarChartProps> = ({ data }) => {
  const categories: string[] = data.map((e) => e.product);

  const height = 230;
  const width = 3 * height;
  const margin = {
    bottom: 30,
    left: 30,
    right: 30,
  };

  useEffect(() => {
    draw();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function draw() {
    d3.select('#sales-bar-chart')
      .select('svg')
      .remove();

    const x = d3.scaleBand()
      .domain(categories)
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 5])
      .range([height - 30, 30]);

    const xAxis = (g: any) => g
      .attr('transform', `translate(10, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(4).tickSizeOuter(0).tickFormat(() => ''))
      .call(() => g.select('.domain').attr('stroke', '#989898'));

    const yAxis = (g: any) => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).tickFormat(d3.format('d')))
      .call(() => g.select('.domain').remove());

    const svg = d3
      .select('#sales-bar-chart')
      .append('svg')
      .attr('width', '100%')
      .attr('viewBox', [0, 0, width, height]);

    svg.append('g')
      .attr('class', 'xAxis')
      .call(xAxis)
      .selectAll('.tick line')
      .attr('stroke', '#989898');

    svg.append('g')
      .attr('class', 'yAxis')
      .call(yAxis)
      .selectAll('.tick text')
      .attr('visibility', (d, i) => {
        if (i % 2 === 1) return 'hidden';
        return '';
      });

    svg.select('.yAxis')
      .selectAll('.tick line')
      .attr('stroke', '#dfe0e1')
      .attr('x1', 10)
      .attr('x2', width - 50)
      .attr('stroke-dasharray', '2')
      .attr('visibility', (d, i) => {
        if (i === 0 || i % 2 === 1) return 'hidden';
        return '';
      });

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'barColumn')
      .append('rect')
      .attr('x', (d, i) => x(categories[i])! + 20)
      .attr('y', (d: ChartData) => y(d.value))
      .attr('height', (d) => height - y(d.value) - margin.bottom)
      .attr('width', x.bandwidth() - 20)
      .attr('fill', '#1890FF')
      .attr('opacity', '70%')
      .attr('pointer-event', 'all');

    svg.selectAll('.barColumn')
      .data(data)
      .on('mouseover', (e, d) => {
        const selectedBar = select(e.currentTarget);
        selectedBar.select('rect')
          .attr('opacity', '100%');
        selectedBar.append('text')
          .attr('class', 'selectedBar')
          .attr('x', () => 20 + x(categories[data.findIndex((el: ChartData) => el.product === d.product)])!)
          .attr('y', () => y(d.value) - 5)
          .attr('width', x.bandwidth())
          .style('font-size', '10px')
          .text(d.value);
      })

      .on('mouseout', (e) => {
        const selectedBar = select(e.currentTarget);
        selectedBar.select('text')
          .remove();
        selectedBar.select('rect')
          .attr('opacity', '70%');
      });
  }

  return (
    <Container id="sales-bar-chart" />
  );
};
