import React from 'react';
import { Avatar, SinveLogo } from '../../assets/icons';
import { Notification } from '../Notification';
import {
  Container, InsideContainer, LeftInsideContainer, RightInsideContainer, TypeToChoice,
} from './style';

export const Navbar: React.FC = () => (
  <Container>
    <InsideContainer>

      <LeftInsideContainer>
        <SinveLogo style={{
          width: '42px',
          height: '42px',
        }}
        />
        <TypeToChoice>Estoque</TypeToChoice>
        <TypeToChoice>Vendas</TypeToChoice>
      </LeftInsideContainer>
      <RightInsideContainer>
        <Notification />
        <Avatar style={{
          width: '64px',
          height: '64px',
        }}
        />
      </RightInsideContainer>
    </InsideContainer>
  </Container>

);
