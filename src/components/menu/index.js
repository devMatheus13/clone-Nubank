import React from 'react';

import { Container, Code,Nav ,NavItem, NavText,SignOutButton, SignOutText} from './styles';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import Icons from '@expo/vector-icons/MaterialIcons'
export default function Menu({translateY}) {
    return (
        <Container  style={{
            opacity:translateY.interpolate({
              inputRange:[0,150],
              outputRange:[0,1],
            })
          }}>
            <Code>
            <QRCode content='https://reactnative.com'
            size={80}
            color={'#8B4AB1'}
            />
            
            </Code>
            <Nav>
                <NavItem>
                    <Icons name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icons name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icons name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icons name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton Onpress={()=>{}}>
                <SignOutText>Sair</SignOutText>
            </SignOutButton>
        </Container>
    );
}
