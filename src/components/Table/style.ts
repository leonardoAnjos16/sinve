import styled from 'styled-components';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import '@fontsource/roboto-mono';

interface InventoryProps {
  color: string
}

export const Container = styled.div`
  .ant-table-tbody  .ant-table-cell {
    background-color: ${(props) => props.theme.colors.background} ;
    border-bottom: 1px solid #E5E2DE ;
  }

  .ant-table-tbody .ant-table-cell {
    background-color: ${(props) => props.theme.colors.background} ;
  }
  width: 100%;

`;

export const LinkCustom = styled.a``;

export const BadgeCustom = styled(Badge)`
  font-family: "Roboto Mono" !important;
`;

export const ArrowDown = styled(CaretDownOutlined)`
  color: black;
  margin-left: 8px !important;
`;

export const ArrowUp = styled(CaretUpOutlined)`
  color: black;
  margin-left: 8px !important;

`;

export const Inventory = styled.div<InventoryProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color} ;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
