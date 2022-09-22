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
  isShowHistory?: boolean;
}

export const InputSinve: React.FC<InputSinveProps> = ({
  width, title, isSelectDate, isShowHistory,
}) => (
  <Container width={width}>
    <TitleRegisterProduct isShowHistory={isShowHistory}>{title}</TitleRegisterProduct>
    {
      isSelectDate ? (
        <DatePicker style={{
          width: '100%',
        }}
        />
      ) : (
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
