import styled from 'styled-components';

export const PageContainer = styled.div`
  height: fit-content;
  padding-bottom: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 85vw;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 40px 0px 20px 0px !important;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const TableContainer = styled.div`
  width: 100%;

  .ant-table-tbody .ant-table-cell {
    background-color: ${(props) => props.theme.colors.background};
    border-bottom: 1px solid #E5E2DE;
  }

  .ant-table-tbody .ant-table-cell {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
