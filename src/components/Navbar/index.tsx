import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/"><TypeToChoice>Estoque</TypeToChoice></Link>
        <Link to="/vendas"><TypeToChoice>Vendas</TypeToChoice></Link>
        <Link to="/fornecedores"><TypeToChoice>Fornecedores</TypeToChoice></Link>
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
