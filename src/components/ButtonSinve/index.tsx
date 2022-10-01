import React from 'react';
import {
  ButtonStyled,
} from './style';

interface ButtonSinveProps {
  title: string
  margin?: string
  onClick?: Function
}

export const ButtonSinve: React.FC<ButtonSinveProps> = ({ title, margin, onClick }) => (
  <ButtonStyled
    margin={margin}
    onClick={() => {
      if (onClick) onClick();
    }}
  >
    {title}

  </ButtonStyled>
);
