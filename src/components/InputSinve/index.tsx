import React from 'react';

import {
  DatePicker,
} from 'antd';
import {
  Container, TitleRegisterProduct, SinveInput,
} from './style';

interface InputSinveProps {
  width: string;
  title: string;
  isSelectDate?: boolean;
}

export const InputSinve: React.FC<InputSinveProps> = ({ width, title, isSelectDate }) => (
  <Container width={width}>
    <TitleRegisterProduct>{title}</TitleRegisterProduct>
    {
      isSelectDate ? (
        <DatePicker style={{
          width: '100%',
        }}
        />
      ) : (
        <SinveInput style={{
          width: '100%',
        }}
        />
      )
    }
  </Container>
);
