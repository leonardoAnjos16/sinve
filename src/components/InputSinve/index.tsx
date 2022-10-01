import React from 'react';

import {
  DatePicker, Select,
} from 'antd';
import {
  Container, TitleRegisterProduct, SinveInput,
} from './style';

const { Option } = Select;

interface InputSinveProps {
  width: string;
  title: string;
  isSelectDate?: boolean;
  isShowHistory?: boolean;
  isSelectable?: boolean
}

export const InputSinve: React.FC<InputSinveProps> = ({
  width, title, isSelectDate, isShowHistory, isSelectable,
}) => (
  <Container width={width}>
    <TitleRegisterProduct isShowHistory={isShowHistory}>{title}</TitleRegisterProduct>

    {
      isSelectable && (
        <Select
          style={{
            width: '100%',
          }}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      )
    }

    {
      isSelectDate && (
        <DatePicker style={{
          width: '100%',
        }}
        />
      )
    }
    {
      !isSelectDate && !isSelectable && (
        <SinveInput
          style={{
            width: '100%',
          }}
          isShowHistory={isShowHistory}
        />
      )
    }
  </Container>
);
