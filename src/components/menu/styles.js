import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native'


export const Container = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;
export const Code = styled.View`
  overflow:hidden;
  background: #fff;
  padding:5px;
  align-self:center;
  border-radius:5px;
`;

export const Nav = styled.View`
   margin-top:30px;
   border-top-width: ${StyleSheet.hairlineWidth}px;
   border-top-color:rgba(255,255,255,0.5)
`;
export const NavItem = styled.View`
   flex-direction:row;
   align-items:center;
   padding:12px 0;
   border-bottom-width: ${StyleSheet.hairlineWidth}px;
   border-bottom-color:rgba(255,255,255,0.5)
`;
export const NavText = styled.Text`
font-size:15px;
color:#fff;
margin-left:20px;

`;

export const SignOutButton = styled.TouchableOpacity`
border-width: ${StyleSheet.hairlineWidth}px;
border-color:rgba(255,255,255,0.5);
border-radius:4px;
justify-content:center;
align-items:center;
padding:12px;
margin-top:15px

`;
export const SignOutText = styled.Text`
font-size:15px;
color:#fff;
font-weight:bold;
`;