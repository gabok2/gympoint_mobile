import React from 'react';
import logo from '../../assets/header.png';

import { Container, Imagem } from './styles';

export default function Header() {
  return (
    <Container>
      <Imagem resizeMode="contain" source={logo} />
    </Container>
  );
}
