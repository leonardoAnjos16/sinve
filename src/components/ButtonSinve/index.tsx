import React from 'react';
import {
  ButtonStyled,
} from './style';

interface ButtonSinveProps {
  title: string
}

export const ButtonSinve: React.FC<ButtonSinveProps> = ({ title }) => (
  <ButtonStyled>{title}</ButtonStyled>
);
