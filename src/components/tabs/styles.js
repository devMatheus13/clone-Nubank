import styled from 'styled-components/native'
import {Animated} from 'react-native'
export const Container = styled(Animated.View)`
  height: 100px;
  margin-top:20px;
  margin-bottom:20px
`;
export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 20,
        paddingRight: 20
    },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
   width:100px;
   height:100px;
   border-radius: 3px;
   background:rgba(255,255,255,0.1);
   margin-left: 10px;
   justify-content: space-between;
   padding: 10px;
`;

export const TabText = styled.Text`
  font-size:13px;
  color:#fff;
`;