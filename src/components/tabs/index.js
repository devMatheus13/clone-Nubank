import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icons from '@expo/vector-icons/MaterialIcons'

export default function Header({translateY}) {
  return (
    <Container style={{
      transform:[{
         translateY: translateY.interpolate({
          inputRange:[0, 380],
          outputRange:[0,30],
          extrapolate:'clamp',
         })
      }],
     opacity:translateY.interpolate({
       inputRange:[0, 380],
       outputRange:[1,0.3],
       extrapolate:'clamp',
     })
    }}>
      <TabsContainer>
        <TabItem>
          <Icons name="person-add" size={25} color="#ddd" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icons name="chat-bubble-outline" size={25} color="#ddd" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icons name="arrow-downward" size={25} color="#ddd" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icons name="arrow-upward" size={25} color="#ddd" />
          <TabText>Tranferir</TabText>
        </TabItem>
        <TabItem>
          <Icons name="lock" size={25} color="#ddd" />
          <TabText>Bloquear</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
