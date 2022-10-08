import styled from 'styled-components';

interface ActiveProps {
  active: boolean;
}

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 22px !important;
  padding-bottom: 7px !important;
  .ant-tabs-top > .ant-tabs-nav::before {
    border: none !important;
  }
  
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.colors.claret};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.claret};
  }
  .ant-tabs-tab {
    margin-right: 10px !important;
    padding-bottom: 7px;
  }
  .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.colors.claret};
  }
`;
