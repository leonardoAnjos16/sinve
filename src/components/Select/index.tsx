/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React, { Dispatch, SetStateAction } from 'react';
import { Select } from 'antd';
import {
  Container,
} from './style';

export type Item = {
  label: string;
  value: string | number;
};

type SelectProps = {
  width: string;
  selectLabel?: string;
  placeholder?: string;
  valueOptions?: any;
  setValue?: Dispatch<SetStateAction<any>>;
  options: Item[];
  isBorder?: boolean;
  marginLeft?: any;

}

export const CustomSelect: React.FC<SelectProps> = ({
  width, selectLabel, placeholder, setValue, options, valueOptions, isBorder, marginLeft,
}) => {
  const handleChange = (valueOnChange: string) => {
    setValue?.(valueOnChange);
  };

  return (
    <Container width={width} marginLeft={marginLeft}>
      <Select
        defaultValue={valueOptions}
        defaultActiveFirstOption
        onChange={handleChange}
        onClick={(e) => e.stopPropagation()}
        value={valueOptions}
        options={options}
        placeholder={placeholder}
        style={{ width: '100%' }}
        filterOption={(input, option) => {
          const currentOption = options.find(
            ({ value }) => value === option?.value,
          );
          if (currentOption?.label) {
            return (
              currentOption.label.toLowerCase().indexOf(input.toLowerCase())
              >= 0
            );
          }
          return true;
        }}
      />
    </Container>
  );
};
