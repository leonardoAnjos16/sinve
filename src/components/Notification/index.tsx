import React from 'react';
import { Bell } from '../../assets/icons';
import {
  Container, NotificationNumber, Number,
} from './style';

export const Notification: React.FC = () => (
  <Container>
    <Bell />
    <NotificationNumber>
      <Number>12</Number>
    </NotificationNumber>
  </Container>
);
