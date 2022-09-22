import React from 'react';

import {
  Input,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
  Container,
} from './style';

interface InputSinveProps {
  width: string;
  title: string;
  isSelectDate?: boolean;
}

export const InputSearch: React.FC<InputSinveProps> = ({ width, title, isSelectDate }) => (
  <Container width={width}>
    <Input placeholder="Pesquise por produto, vencimento" size="large" prefix={<SearchOutlined />} />
  </Container>
);
