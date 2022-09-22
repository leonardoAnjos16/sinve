import styled from 'styled-components';

interface InventoryProps {
  isYellow: boolean
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

export const Inventory = styled.div<InventoryProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isYellow ? '#FFF1B8' : '#FFCCC7')} ;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
