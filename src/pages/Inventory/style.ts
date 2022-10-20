import styled from 'styled-components';
import { Button } from 'antd';
import {
  ButtonSinve,
} from '../../components';

export const Container = styled.div`
  height: fit-content;
  padding-bottom: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const ButtonCustom = styled(Button)`
  margin-left: 20px !important;
  cursor: pointer;
  & :hover{
    background-color: aqua;
  }

`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px 40px 0px !important;
`;

export const ElementsContainer = styled.div`
  display: flex;
  width: 90vw;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  `;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0px 20px 0px !important;
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0px 20px 0px !important;
`;
