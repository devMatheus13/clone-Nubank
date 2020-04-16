import React from "react";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from "./styles";
import Header from "../../components/header";
import Tabs from "../../components/tabs";
import Menu from '../../components/menu'
import Icons from "@expo/vector-icons/MaterialIcons";
import {Animated} from 'react-native'
import {PanGestureHandler, State} from 'react-native-gesture-handler'



export default function Main() {

  let offset = 0;
  const translateY = new Animated.Value(0);
  const AnimatedEvent =  Animated.event([
    {
      nativeEvent:{
        translationY: translateY,
      }
    }
  ],{useNativeDriver:true},
  );


  function onHandlerStateChange(event){
 
    if(event.nativeEvent.oldState === State.ACTIVE){
       let opened = false; 
      const {translationY} = event.nativeEvent;

        offset += translationY;

        if(translationY >= 100){
            opened = true; 
        }else{
          translateY.setValue(offset);
          translateY.setOffset(0);
          offset = 0;
        }

        Animated.timing(translateY,{
          toValue: opened ? 380 : 0,
          duration:200,
          useNativeDriver:true,
        }).start(()=> {
           offset = opened ? 380 : 0
           translateY.setOffset(offset);
           translateY.setValue(0);
        });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler 
        onGestureEvent={AnimatedEvent}
        onHandlerStateChange={onHandlerStateChange}
        >
        <Card style={{transform:
        [{
           translateY:translateY.interpolate({
             inputRange:[-350,0,380],
             outputRange:[-50,0,380],
             extrapolate:'clamp',
           })
        }]
        }}>
          <CardHeader>
            <Icons name="attach-money" size={32} color="#999" />
            <Icons name="visibility-off" size={32} color="#999" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Diego hoje ás 6:00 horas
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  );
}
