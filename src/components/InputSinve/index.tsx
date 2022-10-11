import React, { Dispatch, SetStateAction } from 'react';

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
  withMargin?: boolean;
  placeholder?: string;
  setData?: Dispatch<SetStateAction<string>>;
}

export const InputSinve: React.FC<InputSinveProps> = ({
  width, title, isSelectDate, isShowHistory, isSelectable, withMargin, placeholder, setData,
}) => (
  <Container width={width} withMargin={withMargin}>
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
        <DatePicker
          style={{
            width: '100%',
          }}
          onChange={(event) => {
            console.log(event?.get);
          }}
        />
      )
    }
    {
      !isSelectDate && !isSelectable && (
        <SinveInput
          placeholder={placeholder}
          style={{
            width: '100%',
          }}
          isShowHistory={isShowHistory}
          onChange={(event) => {
            if (setData) { setData(event.target.value); }
          }}
        />
      )
    }
  </Container>

);
