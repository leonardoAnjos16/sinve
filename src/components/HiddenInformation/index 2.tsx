import React from 'react';
import { Arrow } from '../../assets/icons';
import {
  Container, Title, ContentContainer,
} from './style';

interface HiddenInformationProps {
  width: string
  onClick: Function;
  title: string;
}

export const HiddenInformation: React.FC<HiddenInformationProps> = ({ width, onClick, title }) => (
  <Container width={width}>

    <ContentContainer>
      <Title>{title}</Title>
      <Arrow
        onClick={onClick}
        style={{
          cursor: 'pointer',
        }}
      />
    </ContentContainer>

  </Container>
);
