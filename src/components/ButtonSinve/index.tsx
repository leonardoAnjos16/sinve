import React from 'react';
import {
  ButtonStyled,
} from './style';

interface ButtonSinveProps {
  title: string
  margin?: string
}

export const ButtonSinve: React.FC<ButtonSinveProps> = ({ title, margin }) => (
  <ButtonStyled margin={margin}>{title}</ButtonStyled>
);
