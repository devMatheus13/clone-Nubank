import React from 'react';
import  Icons  from '@expo/vector-icons/MaterialIcons'
import { Container, Top, Logo, Title } from './styles';
import logo from '../../assets/Nubank_Logo.png'


export default function Header() {
  return (
    <Container>
      <Top>
          <Logo source={logo} />
          <Title>Matheus</Title>
      </Top>
      <Icons name="keyboard-arrow-down" size={32} color="#fff"/>
    </Container>
  );
}
