
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
import Main from './pages/Main'
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main" screenOptions={{headerShown:false}}>
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}