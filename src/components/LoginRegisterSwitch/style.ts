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
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const Option = styled.div<ActiveProps>`
  width: fit-content;
  cursor: pointer;
  color: ${(props) => (props.active ? '#8B1A47' : 'black')};
  border-bottom: ${(props) => (props.active ? '3px solid #8B1A47' : 0)};
  margin-right: 32px !important;
`;
